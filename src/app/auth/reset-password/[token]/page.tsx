// src/app/auth/reset-password/[token]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Alert } from 'flowbite-react';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

/**
 * Reset Password page
 * Allows users to set a new password using a reset token
 */
const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`/api/auth/validate-reset-token?token=${token}`);
        const data = await response.json();

        setTokenValid(response.ok);
        if (!response.ok) {
          setError(data.message || 'Invalid or expired token');
        }
      } catch (err) {
        setError('Failed to validate token');
        setTokenValid(false);
      } finally {
        setValidating(false);
      }
    };

    if (token) {
      validateToken();
    } else {
      setError('No reset token provided');
      setValidating(false);
      setTokenValid(false);
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }

      setSuccess(true);

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        router.push('/auth/login');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while validating token
  if (validating) {
    return (
      <div className='relative overflow-hidden h-screen bg-muted dark:bg-dark'>
        <div className='flex h-full justify-center items-center px-4'>
          <div className='rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full md:w-[450px] break-words border-none'>
            <div className='flex h-full flex-col justify-center gap-2 p-0 w-full'>
              <div className='mx-auto'>
                <Logo />
              </div>
              <p className='text-sm text-center text-dark my-3'>Validating your reset token...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative overflow-hidden h-screen bg-muted dark:bg-dark'>
      <div className='flex h-full justify-center items-center px-4'>
        <div className='rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full md:w-[450px] break-words border-none'>
          <div className='flex h-full flex-col justify-center gap-2 p-0 w-full'>
            <div className='mx-auto'>
              <Logo />
            </div>
            <h1 className='text-xl font-semibold text-center text-dark mb-2'>Reset Password</h1>

            {!tokenValid ? (
              <div className='mt-4'>
                <Alert color='failure'>
                  <h3 className='font-medium'>Invalid or Expired Link</h3>
                  <p>{error || 'This password reset link is invalid or has expired. Please request a new one.'}</p>
                </Alert>
                <div className='mt-4 text-center'>
                  <Link href='/auth/forgot-password' className='text-primary font-medium'>
                    Request New Reset Link
                  </Link>
                </div>
              </div>
            ) : success ? (
              <div className='mt-4'>
                <Alert color='success'>
                  <h3 className='font-medium'>Password Reset Successful!</h3>
                  <p>Your password has been reset successfully. You will be redirected to the login page shortly.</p>
                </Alert>
                <div className='mt-4 text-center'>
                  <Link href='/auth/login' className='text-primary font-medium'>
                    Go to Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <p className='text-sm text-center text-dark my-3'>Enter your new password below.</p>

                {error && (
                  <Alert color='failure' className='mb-4'>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <div className='mb-2 block'>
                      <Label htmlFor='password' value='New Password' />
                    </div>
                    <TextInput
                      id='password'
                      type='password'
                      sizing='md'
                      className='form-control'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className='mb-6'>
                    <div className='mb-2 block'>
                      <Label htmlFor='confirmPassword' value='Confirm Password' />
                    </div>
                    <TextInput
                      id='confirmPassword'
                      type='password'
                      sizing='md'
                      className='form-control'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button color={'primary'} className='w-full' type='submit' disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
