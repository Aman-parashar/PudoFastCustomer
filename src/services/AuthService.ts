import { apiService, API_ENDPOINTS } from '../apiService';
import { ApiResponse, Country, LoginResponse } from '../types/api';

export const AuthService = {
  login: async (data: any): Promise<LoginResponse> => {
    return await apiService.post<LoginResponse>(API_ENDPOINTS.LOGIN, data);
  },
  signup: async (data: any): Promise<LoginResponse> => {
    return await apiService.post<LoginResponse>(API_ENDPOINTS.SIGNUP, data);
  },
  verifyOtp: async (data: any) => {
    return await apiService.post(API_ENDPOINTS.VERIFY_OTP, data);
  },
  logout: async () => {
    return await apiService.post(API_ENDPOINTS.LOGOUT);
  },
  getCountries: async (): Promise<ApiResponse<Country[]>> => {
    return await apiService.post<ApiResponse<Country[]>>(API_ENDPOINTS.GET_COUNTRIES, {});
  },
};

