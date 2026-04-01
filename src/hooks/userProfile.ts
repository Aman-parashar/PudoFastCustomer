import { useQuery } from "@tanstack/react-query"
import { ReactQuaryConst } from "../navigation/Constant"
import { ProfileService } from "../services/ProfileService"
import { useEffect } from "react"
import Toast from "react-native-toast-message"

export const useProfileData = () => {



    const { data, isError, isPending, error, isSuccess } = useQuery({
        queryKey: [ReactQuaryConst.USER_DATA],
        queryFn: () => ProfileService.getUserDetails(),
    })
    // useEffect(() => {
    //     if (isError && error) {
    //         Toast.show({
    //             type: 'error',
    //             text1: error.message,
    //         });
    //     }
    // }, [isError, error])

    return { data, isPending, isSuccess }
}