/**
 * Reset Password page component
 */

import { useState, FormEvent, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { AuthLogo } from '../components/AuthLogo';
import { PasswordInput } from '../components/PasswordInput';
import { AuthButton } from '../components/AuthButton';
import { useResetPassword } from '../hooks/useResetPassword';

export function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resetPasswordMutation = useResetPassword();

  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!token) {
      navigate('/forgot-password');
    }
  }, [token, navigate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setErrors({ submit: 'Invalid reset token. Please request a new one.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      await resetPasswordMutation.mutateAsync({
        token,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });
    } catch (error: any) {
      setErrors({
        submit:
          error?.response?.data?.detail ||
          'Failed to reset password. Please try again.',
      });
    }
  };

  if (!token) {
    return null;
  }

  return (
    <AuthForm>
      <AuthLogo />
      <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
        Reset Password
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Enter a new password for your account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <PasswordInput
          id="newPassword"
          label="New password"
          placeholder="New password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
          error={errors.newPassword}
          required
        />

        <PasswordInput
          id="confirmPassword"
          label="Confirm password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          error={errors.confirmPassword}
          required
        />

        {errors.submit && (
          <div className="text-sm text-red-600 text-center" role="alert">
            {errors.submit}
          </div>
        )}

        <AuthButton
          type="submit"
          loading={resetPasswordMutation.isPending}
          variant="primary"
        >
          Set New Password
        </AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        <Link to="/login" className="font-medium text-primary hover:text-primary/90">
          Back to Login
        </Link>
      </p>
    </AuthForm>
  );
}

