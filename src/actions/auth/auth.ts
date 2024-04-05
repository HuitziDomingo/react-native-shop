import { tesloApi } from "../../config/api/tesloApi"
import { UserEntity } from "../../domain/entities/user.entity"
import type { AuthResponse } from "../../infrastructure/interfaces/auth.response"


const returnUserToken = (data: AuthResponse) => {
    const user: UserEntity = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        isActive: data.isActive,
        roles: data.roles
    }
    return {
        user,
        token: data.token

    }
}



export const authLogin = async (email: string, password: string) => {
    email.toLowerCase()
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password,
        })
        return returnUserToken(data)
    } catch (error) {
        console.log(error)
        return null
    }
}