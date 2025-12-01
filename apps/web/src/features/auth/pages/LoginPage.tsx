/**
 * Login page component
 */

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { AuthLogo } from '../components/AuthLogo';
import { AuthInput } from '../components/AuthInput';
import { PasswordInput } from '../components/PasswordInput';
import { AuthButton } from '../components/AuthButton';
import { useLogin } from '../hooks/useLogin';

export function LoginPage() {
  const loginMutation = useLogin();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await loginMutation.mutateAsync({
        email: formData.email,
        password: formData.password,
      });
    } catch (error: any) {
      setErrors({
        submit:
          error?.response?.data?.detail ||
          'Invalid email or password. Please try again.',
      });
    }
  };

  return (
    <AuthForm>
      <AuthLogo />
      <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
        Welcome back
      </h1>
      <p className="text-gray-600 text-center mb-8">Log in to your account</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          id="email"
          label="Email address"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          required
        />

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary hover:text-primary/90"
          >
            Forgot password?
          </Link>
        </div>

        {errors.submit && (
          <div className="text-sm text-red-600 text-center" role="alert">
            {errors.submit}
          </div>
        )}

        <AuthButton
          type="submit"
          loading={loginMutation.isPending}
          variant="primary"
        >
          Log in
        </AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-primary hover:text-primary/90">
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
}

