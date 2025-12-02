// apps/mobile/app/_layout.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import { ApiProvider } from '../context/ApiContext';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <ApiProvider>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <Stack screenOptions={{ headerShown: false }} />
        <Toast />
      </AuthProvider>
    </ApiProvider>
  );
}


