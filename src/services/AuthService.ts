import { apiService, API_ENDPOINTS } from '../apiService';
import { ApiResponse, Country, LoginResponse } from '../types/api';

export const AuthService = {
  login: async (data: any): Promise<LoginResponse> => {
    const response = await apiService.post<LoginResponse>(API_ENDPOINTS.LOGIN, data);
    console.log("Login API Response:", response);
    return response;
  },
  signup: async (data: any): Promise<LoginResponse> => {
    return await apiService.post<LoginResponse>(API_ENDPOINTS.SIGNUP, data);
  },
  verifyOtp: async (data: any) => {
    const response = await apiService.post(API_ENDPOINTS.VERIFY_OTP, data);
    console.log("Verify OTP API Response:", response);
    return response;
  },
  resendOtp: async (data: any) => {
    const response = await apiService.post(API_ENDPOINTS.RESEND_OTP, data);
    console.log("Resend OTP API Response:", response);
    return response;
  },
  logout: async () => {
    return await apiService.post(API_ENDPOINTS.LOGOUT);
  },
  getCountries: async (): Promise<ApiResponse<Country[]>> => {
    const response = await apiService.post<ApiResponse<Country[]>>(API_ENDPOINTS.GET_COUNTRIES, {});
    console.log("Country API Response:", response.data);
    return response;
  },
  forgotPassword: async (data: any) => {
    const response = await apiService.post(API_ENDPOINTS.FORGOT_PASSWORD, data);
    console.log("Forgot Password API Response:", response);
    return response;
  },
  resetPassword: async (data: any) => {
    const response = await apiService.post(API_ENDPOINTS.RESET_PASSWORD, data);
    console.log("Reset Password API Response:", response);
    return response;
  },
};

