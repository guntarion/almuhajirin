// src/app/api/idea-search/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Validate environment variable
if (!process.env.GEMINI_KEY) {
  throw new Error('GEMINI_KEY environment variable is not set');
}

// Initialize Gemini AI with flash model configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const { message, ideas } = await req.json();

    if (!message || !ideas) {
      return NextResponse.json(
        {
          error: 'Message and ideas data are required',
        },
        { status: 400 }
      );
    }

    // Create prompt with XML tags to separate context and question
    const prompt = `
      <context>
      Here is a list of innovation ideas with their details:
      ${JSON.stringify(ideas, null, 2)}
      </context>
      Based on the above innovation ideas database, please answer this question or respond to this message, using formal Bahasa Indonesia:
      <question>${message}</question>
      Please provide relevant examples from the ideas database when applicable.
    `;

    // Generate response with stream
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    try {
      const result = await model.generateContentStream(prompt);

      // Process stream
      (async () => {
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              await writer.write(encoder.encode(`data: ${JSON.stringify({ content: chunkText })}\n\n`));
            }
          }
          await writer.close();
        } catch (error) {
          console.error('Streaming error:', error);
          await writer.write(encoder.encode(`data: ${JSON.stringify({ error: 'Streaming error occurred' })}\n\n`));
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
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Failed to generate response',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
