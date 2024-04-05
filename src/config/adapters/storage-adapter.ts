import AsyncStorage from "@react-native-async-storage/async-storage"

export class StorageAdapter {


    static async getItem(key: string): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            return null
        }
    }


    static async setItem(key: string, value: string): Promise<void> {
        try {
            return await AsyncStorage.setItem(key, value)
        } catch (error) {
            throw new Error(`Error stting item ${error}`)
        }
    }


    static async removeItem(key: string): Promise<void> {
        try {
            return await AsyncStorage.removeItem(key)

        } catch (error) {
            console.log(error)
            throw new Error(`Error stting item ${key}`)
        }
    }


}