// src/app/(DashboardLayout)/api/doaGenerator/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI, APIError } from 'openai';

interface GeneratorRequest {
  prompt: string;
}

interface StreamResponse {
  content: string;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

// Initialize OpenAI client with QWEN configuration
const qwenClient = new OpenAI({
  apiKey: process.env.QWEN_API_KEY || '',
  baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
});

/**
 * API endpoint for generating prayers using Qwen AI
 * This is a public endpoint that does not require authentication
 */
export async function POST(req: NextRequest): Promise<Response | NextResponse<ErrorResponse>> {
  try {
    if (!process.env.QWEN_API_KEY) {
      return NextResponse.json({ error: 'QWEN API key is not configured' }, { status: 500 });
    }

    const body = (await req.json()) as GeneratorRequest;
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Prepare system prompt to guide AI response
    const systemPrompt = `
      Kamu adalah generator doa kustom Islami. Tugas kamu:

      1. Menganalisis intensi doa pengguna
      2. Memilih 1-3 Asmaul Husna yang paling relevan dengan intensi sebagai tawasul
      3. Menyusun doa dalam bahasa Indonesia yang:
         - Relevan dengan intensi spesifik pengguna
         - Mengandung pengakuan kelemahan diri sebagai hamba Allah
         - Menggunakan bahasa yang mudah dipahami namun bermakna

      Format output harus mencakup:
      - Basmalah dalam tulisan Arab diasumsikan sudah ada di UI
      - Tawasul dengan Asmaul Husna terpilih
      - Isi doa yang personal
      - Penutup yang sesuai
      
      Berikan hanya teks doa tanpa penjelasan tambahan.
    `;

    // Set up streaming
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    try {
      const completion = await qwenClient.chat.completions.create({
        model: 'qwen-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        stream: true,
        temperature: 0.7,
      });

      (async () => {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content || chunk.choices[0]?.finish_reason === 'stop') {
              await writer.write(encoder.encode(`data: ${JSON.stringify({ content } satisfies StreamResponse)}\n\n`));
            }
          }
        } catch (error) {
          console.error('Streaming error:', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown streaming error';
          await writer.write(encoder.encode(`data: ${JSON.stringify({ error: errorMessage })}\n\n`));
        } finally {
          await writer.close();
        }
      })();

      return new Response(stream.readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        },
      });
    } catch (apiError: unknown) {
      console.error('QWEN API error:', apiError);
      const errorMessage = apiError instanceof APIError ? apiError.message : 'QWEN API error';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  } catch (error) {
    console.error('Route handler error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
