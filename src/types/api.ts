import { User } from '../models/User';

/**
 * Generic API Response structure
 */
export interface ApiResponse<T = any> {

  message: string;
  data: T;
  code?: ApiStatusCode | string;
}

/**
 * API Status Codes (matching iOS implementation)
 */
export enum ApiStatusCode {
  INVALID_OR_FAIL = "0",
  SUCCESS = "1",
  EMPTY_DATA = "2",
  INACTIVE_ACCOUNT = "3",
  OTP_VERIFICATION = "4",
  EMAIL_VERIFY = "5",
  HARD_UPDATE_REQUIRED = "6",
  SOFT_UPDATE_AVAILABLE = "7",
  DOCUMENT_VERIFICATION = "8",
  BANK_DETAIL_VERIFICATION = "9",
  SOCIAL_ACCOUNT_NOT_REGISTERED = "12",
  SESSION_EXPIRE = "-1",
  PHONE_NUMBER_UPDATED = "20",
}

/**
 * --- Auth Related Interfaces ---
 */

export enum SocialLoginType {
  google = "G",
  facebook = "F",
  apple = "A",
  simple = "S"
}

export interface LoginFormValues {
  login_type: SocialLoginType;
  login_with: "email" | "phone";
  country_code: string;
  email: string;
  phone: string;
  password: string;
  social_id?: string;
  device_type: string;
  device_token: string
  user_type: "customer" | "driver";
}
export interface SignUpRequest {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  address: string,
  password: string,
  country_code: string,
  country_id: number,
  login_type: SocialLoginType,
  social_id: string,
  type: "customer",
  delivery_type: string,
  device_type: 'I' | 'A',
  device_token: string,
  latitude: string,
  longitude: string,
  version: string
}


export type LoginResponse = ApiResponse<{
  user: User;
  token: string;
}>;
export interface UserProfileResponse {
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

export interface Country {
  id: number;
  country: string;
  country_code: string;
  flag: string;
  capital: string;
  code: string;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  native: string;
  region: string;
  sortcode: string;
  subregion: string;
  timezone_name: string;
  timezone_offset: string;
}

export type CountriesResponse = ApiResponse<Country[]>;

/**
 * --- Error Response structure ---
 */
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}
