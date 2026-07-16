import AsyncStorage from "@react-native-async-storage/async-storage";
interface token{
    accessToken:string,
    refreshToken:string
}
export const registerTokenStorage=async({accessToken,refreshToken}:token):Promise<void>=>{
    await AsyncStorage.setItem("accessToken",accessToken)
    await AsyncStorage.setItem("refreshToken",refreshToken)
   
}
export const loginTokenStorage=async({accessToken,refreshToken}:token):Promise<void>=>{
    await AsyncStorage.setItem("accessToken",accessToken)
    await AsyncStorage.setItem("refreshToken",refreshToken)
    
}
export const logOutTokenStorage=async():Promise<void>=>{
    await AsyncStorage.removeItem("accessToken")
    await AsyncStorage.removeItem("refreshToken")
}
export const checkLoginAccessTokenStorage=async():Promise<string>=>{
    const accessToken = await AsyncStorage.getItem("accessToken")
    if(!accessToken){
        return "accessToken is missing"
    }
    return accessToken
}
export const getToken=async():Promise<token|null>=>{
    const accessToken = await AsyncStorage.getItem("accessToken")
    const refreshToken = await AsyncStorage.getItem("refreshToken")
    if(!accessToken || !refreshToken){
        return null
    }
    return {accessToken,refreshToken}
}