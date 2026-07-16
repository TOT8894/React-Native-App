import AsyncStorage from "@react-native-async-storage/async-storage";

export const register=async({accessToken,refreshToken}:any)=>{
    await AsyncStorage.setItem("accessToken",accessToken)
    await AsyncStorage.setItem("refreshToken",refreshToken)
    return {accessToken,refreshToken}
}
export const login=async({accessToken,refreshToken}:any)=>{
    await AsyncStorage.setItem("accessToken",accessToken)
    await AsyncStorage.setItem("refreshToken",refreshToken)
    return {accessToken,refreshToken}
}
export const logOut=async()=>{
    await AsyncStorage.removeItem("accessToken")
    await AsyncStorage.removeItem("refreshToken")
}
export const checkLogin=async()=>{
    const accessToken = await AsyncStorage.getItem("accessToken")
    const refreshToken = await AsyncStorage.getItem("refreshToken")
    return {accessToken,refreshToken}
}