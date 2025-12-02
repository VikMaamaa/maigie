import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuthContext } from '../context/AuthContext';

export default function Index() {
  const router = useRouter();
  const { userToken, isLoading } = useAuthContext();

  useEffect(() => {
    if (isLoading) return;

    if (userToken) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth');
    }
  }, [userToken, isLoading]);

  return null;
}


