/**
 * Base form wrapper component for auth pages
 */

import { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

interface AuthFormProps {
  children: ReactNode;
  className?: string;
}

export function AuthForm({ children, className }: AuthFormProps) {
  return (
    <div className="min-h-screen bg-gray-50 md:flex md:items-center md:justify-center md:px-4 md:py-12 md:sm:px-6 md:lg:px-8">
      <div
        className={cn(
          'w-full bg-white md:max-w-md md:rounded-xl md:shadow-sm p-8 sm:p-10',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

