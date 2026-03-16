import axios from 'axios';

const BASE_URL = 'https://api.pudofast.com'; // Placeholder, should be in config

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AuthService = {
  login: async (data: any) => {
    try {
      const response = await apiClient.post('/user/login', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signup: async (data: any) => {
    try {
      const response = await apiClient.post('/customer/signup', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
