// src/hooks/useAuth.ts
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

/**
 * Custom hook for authentication operations
 * Provides session data and authentication methods
 */
export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';
  const user = session?.user;

  /**
   * Check if user has required role
   * @param requiredRole - Single role or array of roles to check against
   * @returns Boolean indicating if user has the required role
   */
  const hasRole = (requiredRole: string | string[]) => {
    if (!isAuthenticated || !user) return false;

    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(user.role);
    }

    // Admin can access all roles
    if (user.role === 'admin') return true;

    return user.role === requiredRole;
  };

  /**
   * Sign out and redirect to home page
   */
  const logout = () => {
    signOut({ callbackUrl: '/' });
  };

  /**
   * Sign in with Google
   * @param callbackUrl - URL to redirect to after successful login
   */
  const loginWithGoogle = (callbackUrl = '/') => {
    signIn('google', { callbackUrl });
  };

  return {
    session,
    status,
    isAuthenticated,
    isLoading,
    user,
    hasRole,
    loginWithGoogle,
    logout,
  };
}
