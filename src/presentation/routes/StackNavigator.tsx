import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../screens/product/ProductScreen'
import LoadingScreen from '../screens/loading/LoadingScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import HomeScreen from '../screens/home/HomeScreen'



type RootStackParams = {
    LoadingScreen: undefined
    LoginScreen: undefined
    RegisterScreen: undefined
    HomeScreen: undefined
    ProductScreen: {ProductId: string }
}


const Stack = createStackNavigator<RootStackParams>()

export default function StacKNavigator() {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            
        </Stack.Navigator>
    );
}