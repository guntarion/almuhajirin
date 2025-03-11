// src/app/auth/forgot-password/page.tsx
'use client';

import React, { useState } from 'react';
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import Link from 'next/link';

/**
 * Forgot Password page
 * Allows users to request a password reset link via email
 */
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative overflow-hidden h-screen bg-muted dark:bg-dark'>
      <div className='flex h-full justify-center items-center px-4'>
        <div className='rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full md:w-[450px] break-words border-none'>
          <div className='flex h-full flex-col justify-center gap-2 p-0 w-full'>
            <div className='mx-auto'>
              <Logo />
            </div>
            <h1 className='text-xl font-semibold text-center text-dark mb-2'>Lupa Password</h1>

            {success ? (
              <div className='mt-4'>
                <Alert color='success'>
                  <h3 className='font-medium'>Periksa email Anda!</h3>
                  <p>
                    Kami telah mengirimkan tautan pengaturan ulang kata sandi ke alamat email Anda. Silakan periksa kotak masuk (inbox) dan folder
                    spam Anda.
                  </p>
                </Alert>
                <div className='mt-4 text-center'>
                  <Link href='/auth/login' className='text-primary font-medium'>
                    Kembali ke Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <p className='text-sm text-center text-dark my-3'>
                  Harap masukkan email Anda di bawah ini dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
                </p>

                {error && (
                  <Alert color='failure' className='mb-4'>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <div className='mb-2 block'>
                      <Label htmlFor='email' value='Email Address' />
                    </div>
                    <TextInput
                      id='email'
                      type='email'
                      sizing='md'
                      className='form-control'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button color={'primary'} className='w-full' type='submit' disabled={loading}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </Button>
                </form>

                <div className='flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center'>
                  <p>Sudah ingat password?</p>
                  <Link href={'/auth/login'} className='text-primary text-sm font-medium'>
                    Sign in
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
