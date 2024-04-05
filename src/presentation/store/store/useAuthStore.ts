import { create } from "zustand";
import { UserEntity } from "../../../domain/entities/user.entity";
import { AuthStatus } from "../../../infrastructure/interfaces/authStatus";
import { authCheckStatus, authLogin } from "../../../actions/auth/auth";
import { StorageAdapter } from "../../../config/adapters/storage-adapter";

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: UserEntity

    login: (email: string, password: string) => Promise<boolean>
    checkStatus: () => Promise<void>
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async (email: string, password: string) => {
        let response = await authLogin(email, password)
        if (!response) {
            set({ status: 'unauthenticated', token: undefined, user: undefined })
            return false
        }
       
        await StorageAdapter.setItem('token', response.token)
       
        set({ status: 'authenticated', token: response.token, user: response.user })
        return false
    },
    checkStatus: async () => {
        let response = await authCheckStatus()
        if (!response) {
            set({ status: 'unauthenticated', token: undefined, user: undefined })
            return
        }
      
        await StorageAdapter.setItem('token', response.token)
        
        set({ status: 'authenticated', token: response.token, user: response.user })
    }


}))