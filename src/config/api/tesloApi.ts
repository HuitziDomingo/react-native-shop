import { API_URL as PROD_URL, STAGE, API_VERSION_IOS, API_VERSION_ANDROID } from "@env"
import axios from "axios"
import { Platform } from "react-native"


export const API_URL = STAGE === 'prod' ? PROD_URL : Platform.OS === 'ios' ? API_VERSION_IOS : API_VERSION_ANDROID

const tesloApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})


export {
    tesloApi
}