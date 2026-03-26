import apiClient from './axiosInterceptor';
import { API_ENDPOINTS } from './endPoint';

export const apiService = {
    get: <T = any>(url: string, params = {}): Promise<T> => apiClient.get(url, { params }),
    post: <T = any>(url: string, data = {}): Promise<T> => apiClient.post(url, data),
    put: <T = any>(url: string, data = {}): Promise<T> => apiClient.put(url, data),
    delete: <T = any>(url: string): Promise<T> => apiClient.delete(url),
};

export { API_ENDPOINTS };
export default apiService;
