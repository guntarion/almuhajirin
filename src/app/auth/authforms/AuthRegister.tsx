// src/app/auth/authforms/AuthRegister.tsx
'use client';

import { Button, Label, TextInput, Alert } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@/hooks/useAuth';

/**
 * Registration form component
 * Includes email/password registration with validation
 */
const AuthRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const { loginWithGoogle } = useAuth();

  const validateForm = () => {
    if (!name.trim()) {
      setError('Name is required');
      return false;
    }

    if (!email.trim()) {
      setError('Email is required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!password) {
      setError('Password is required');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset state
    setError('');
    setSuccess('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Submit registration
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setSuccess('Registration successful! Redirecting to login page...');

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Alert color='failure' className='mb-4'>
          {error}
        </Alert>
      )}

      {success && (
        <Alert color='success' className='mb-4'>
          {success}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Name' />
          </div>
          <TextInput id='name' type='text' sizing='md' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email Address' />
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
          {loading ? 'Creating Account...' : 'Sign Up'}
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
          Sign up with Google
        </Button>
      </form>
    </>
  );
};

export default AuthRegister;
