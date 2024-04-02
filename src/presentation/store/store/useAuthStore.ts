import { create } from "zustand";
import { UserEntity } from "../../../domain/entities/user.entity";
import { AuthStatus } from "../../../infrastructure/interfaces/authStatus";
import { authLogin } from "../../../actions/auth/auth";

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: UserEntity

    login: (email: string, password: string) => Promise<boolean>
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
        //TODO guardar token en local storage
        set({ status: 'authenticated', token: undefined, user: undefined })
        return false
    }

}))