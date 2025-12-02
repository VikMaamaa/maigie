import React from 'react';
import { useRouter } from 'expo-router';
import { ForgotPasswordScreen } from '../../screens/ForgotPasswordScreen';

export default function ForgotPasswordRoute() {
  const router = useRouter();

  return (
    <ForgotPasswordScreen
      onNavigate={(screen, params) => {
        if (screen === 'otp') {
          router.push({
            pathname: '/auth/otp',
            params,
          });
        } else if (screen === 'login') {
          router.replace('/auth');
        }
      }}
      onBack={() => router.back()}
    />
  );
}

