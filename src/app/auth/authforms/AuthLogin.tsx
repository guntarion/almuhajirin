// src/app/auth/authforms/AuthLogin.tsx
'use client';

import { Button, Checkbox, Label, TextInput, Alert } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Login form component with credentials and Google sign-in
 */
const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { loginWithGoogle } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  // Show error from URL if present
  const urlError = searchParams.get('error') === 'CredentialsSignin' ? 'Invalid email or password' : '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (result?.error) {
        console.error('Sign in error:', result.error);
        setError('Invalid email or password. Please check your credentials and try again.');
        return;
      }

      // Redirect to dashboard on success
      router.push(callbackUrl);
    } catch (err) {
      console.error('Auth error:', err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {(error || urlError) && (
        <Alert color='failure' className='mb-4'>
          {error || urlError}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email' />
          </div>
          <TextInput id='email' type='email' sizing='md' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Password' />
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
        <div className='flex justify-between my-5'>
          <div className='flex items-center gap-2'>
            <Checkbox id='remember' className='checkbox' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <Label htmlFor='remember' className='opacity-90 font-normal cursor-pointer'>
              Ingat Perangkat Ini
            </Label>
          </div>
          <Link href='/auth/forgot-password' className='text-primary text-sm font-medium'>
            Lupa Password?
          </Link>
        </div>
        <Button color={'primary'} className='w-full' type='submit' disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>

        <div className='relative flex items-center justify-center mt-4'>
          <div className='border-t border-gray-300 flex-grow mr-3'></div>
          <span className='text-gray-500 font-medium'>OR</span>
          <div className='border-t border-gray-300 flex-grow ml-3'></div>
        </div>

        <Button
          onClick={() => loginWithGoogle()}
          className='w-full mt-4 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 flex items-center justify-center'
          type='button'
        >
          <FcGoogle className='mr-2 text-xl' />
          Sign in with Google
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
