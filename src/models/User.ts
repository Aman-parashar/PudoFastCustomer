export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  token: string;
  type: 'customer' | 'driver';
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}
export interface UserData {
  address: string;
  app_rate: number;
  app_version: string;
  availdate: string;

  bank_flag: number;

  country_code: string;
  country_id: number;

  delivery_type: string;

  device_token: string;
  device_type: string;

  doc_status: string;

  driving_license_back: string;
  driving_license_front: string;

  email: string;

  first_name: string;
  last_name: string;
  full_name: string;

  forgot_password_time: string;
  forgot_password_token: string;
  forgot_verify: string;

  id: number;

  insertdate: string;

  insurance_back: string;
  insurance_front: string;

  is_active: number;
  is_available: number;
  is_block: number;
  is_deleted: number;

  last_login: string;

  latitude: string;
  longitude: string;

  lock_id: string;
  lockpin: string;

  login_status: string;
  login_type: string;

  other_back: string;
  other_front: string;

  otp: string;
  otp_verify: string;

  password: string;

  phone: string;

  profile_image: string;

  social_id: string;

  token: string;

  total_rating: number;
  total_review: number;

  type: string;

  updatetime: string;

  verify_status: string;
  verify_time: string;

  wallet_balance: number;
}
