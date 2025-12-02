import React from 'react';
import { useRouter } from 'expo-router';
import { AuthScreen } from '../../screens/AuthScreen';

export default function AuthIndex() {
  const router = useRouter();

  return (
    <AuthScreen
      onForgotPassword={() => router.push('/auth/forgot-password')}
      onSignupSuccess={(email) =>
        router.push({
          pathname: '/auth/otp',
          params: { email, reason: 'signup-verification' },
        })
      }
    />
  );
}

