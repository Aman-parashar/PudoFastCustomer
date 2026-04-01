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
    }

}