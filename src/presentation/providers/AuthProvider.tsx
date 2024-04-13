import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParams } from "../routes/StackNavigator"
import { PropsWithChildren, useEffect } from "react"
import { useAuthStore } from "../store/store/useAuthStore"


export default function AuthProvider({ children }: PropsWithChildren) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const { status, checkStatus } = useAuthStore()


    useEffect(() => {
        checkStatus()
    }, [])


    useEffect(() => {
        if (status !== 'checking') {
            if (status === 'authenticated')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                })
            else
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoadingScreen' }]
                })
        }
    }, [status])

    return (
        <>
            {children}
        </>
    )
}
