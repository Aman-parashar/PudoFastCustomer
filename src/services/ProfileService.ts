import { UserData } from "../models/User";
import { apiService } from "../apiService";
import { API_ENDPOINTS } from "../apiService/endPoint";
import { ApiStatusCode } from "../types/api";

export const ProfileService = {
    getUserDetails: async (): Promise<UserData> => {
        const res = await apiService.post(API_ENDPOINTS.USER_DETAILS);
        if (res?.code !== ApiStatusCode.SUCCESS) {
            throw new Error(res?.message || "Something went wrong");
        }

        return res?.data;
    },

    updateUserDetails: async (data: any): Promise<UserData> => {
        const res = await apiService.post(API_ENDPOINTS.UPDATE_PROFILE, data);
        console.log(res, "resin fdcvgh")
        if (res?.code !== ApiStatusCode.SUCCESS) {
            throw new Error(res?.message || "Something went wrong");
        }

        return res?.data;
    },

    rateApp: async (rate: number): Promise<any> => {
        const res = await apiService.post(API_ENDPOINTS.APP_RATE, { rate });
        if (res?.code !== ApiStatusCode.SUCCESS) {
            throw new Error(res?.message || "Something went wrong");
        }
        return res;
    },

    getMyReviews: async (rating: string): Promise<any> => {
        const res = await apiService.post(API_ENDPOINTS.GET_REVIEWS, { rating });
        return res;
    },

    contactUs: async (data: any): Promise<any> => {
        const res = await apiService.post(API_ENDPOINTS.CONTACT_US, data);
        if (res?.code !== ApiStatusCode.SUCCESS) {
            throw new Error(res?.message || "Something went wrong");
        }
        return res;
    }
}