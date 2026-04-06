import apiService from "../apiService";
import { API_ENDPOINTS } from "../apiService/endPoint";
import { ApiStatusCode } from "../types/api";


interface ServiceResponse {

    id: number,
    name: string

}
interface DeliveryRequest {
    latitude: string,
    longitude: string,
    delivery_type: string
}

export const DeliveryService = {

    getService: async (): Promise<ServiceResponse[]> => {
        const res = await apiService.post(API_ENDPOINTS.SERVICE_TYPE_LIST)
        if (res?.code === ApiStatusCode.SUCCESS) {
            return res?.data

        }
        throw new Error(res?.message || "Something went wrong")

    },
    getDriverTime: async (data: DeliveryRequest): Promise<ServiceResponse[]> => {

        const res = await apiService.post(API_ENDPOINTS.GET_DRIVER_TIME, data)
        if (res?.code === ApiStatusCode.SUCCESS) {
            return res?.data
        }
        throw new Error(res?.message || "Something went wrong")
    }
};