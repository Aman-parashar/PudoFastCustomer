import { User } from '../models/User';

/**
 * Generic API Response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  status?: number;
}

/**
 * --- Auth Related Interfaces ---
 */

export interface LoginRequest {
  email?: string;
  phone?: string;
  password?: string;
}

export type LoginResponse = ApiResponse<{
  user: User;
  token: string;
}>;

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
}

export type SignupResponse = ApiResponse<{
  user: User;
  token: string;
}>;

export interface VerifyOtpRequest {
  otp: string;
  email?: string;
  phone?: string;
  type: 'email' | 'phone';
}

export interface ForgotPasswordRequest {
  email?: string;
  phone?: string;
  type: 'email' | 'phone';
}

/**
 * --- Error Response structure ---
 */
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}
