import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { useAuthContext } from '../context/AuthContext';

export default function Index() {
  const router = useRouter();
  const { userToken, isLoading } = useAuthContext();
  const hasNavigated = useRef(false);

  useEffect(() => {
    // Wait for auth state to be loaded and ensure we only navigate once
    if (isLoading || hasNavigated.current) return;

    // Use requestAnimationFrame to ensure router is mounted
    const frameId = requestAnimationFrame(() => {
      try {
        hasNavigated.current = true;
        if (userToken) {
          router.replace('/dashboard');
        } else {
          router.replace('/auth');
        }
      } catch {
        // Router might not be ready yet, retry after a short delay
        hasNavigated.current = false;
        setTimeout(() => {
          if (!hasNavigated.current) {
            hasNavigated.current = true;
            if (userToken) {
              router.replace('/dashboard');
            } else {
              router.replace('/auth');
            }
          }
        }, 100);
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [userToken, isLoading, router]);

  return null;
}


