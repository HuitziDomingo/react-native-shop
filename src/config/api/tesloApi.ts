import { API_URL as PROD_URL, STAGE, API_VERSION_IOS, API_VERSION_ANDROID } from "@env"
import axios from "axios"
import { Platform } from "react-native"
import { StorageAdapter } from "../adapters/storage-adapter"


export const API_URL = STAGE === 'prod' ? PROD_URL : Platform.OS === 'ios' ? API_VERSION_IOS : API_VERSION_ANDROID

const tesloApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})


tesloApi.interceptors.request.use(

    async(config) => {
        let token = await StorageAdapter.getItem('token')
        if(token) config.headers['Authorization'] = `Bearer ${token}`
        return config
    }

)


export {
    tesloApi
}