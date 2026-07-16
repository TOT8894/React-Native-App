import {  checkLoginAccessTokenStorage, loginTokenStorage, logOutTokenStorage, registerTokenStorage } from "../storage/tokenStorage";
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const Register=async(data:any)=>{
    const response = await fetch(`${BASE_URL}/register`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const body = await response.json()
    if (!response.ok) {
        throw new Error(body.message || "Registration failed");
    }
    const accessToken = body?.accesstoken??body?.data?.accessToken;
    const refreshToken = body?.refreshToken??body?.data?.refreshToken;
    await registerTokenStorage({accessToken,refreshToken})
    return body;
}
export const Login=async(data:any)=>{
    const response = await fetch(`${BASE_URL}/login`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const body = await response.json()
    if (!response.ok) {
        throw new Error(body.message || "Registration failed");
    }
    const accessToken = body?.accesstoken??body?.data?.accessToken;
    const refreshToken = body?.refreshToken??body?.data?.refreshToken;
    await loginTokenStorage({accessToken,refreshToken})
    return body;
}
export const LogOut=async()=>{
    const token = await checkLoginAccessTokenStorage()
    const response = await fetch(`${BASE_URL}/logout`,{
        method:"POST",
        headers:{
            authorization:`Bearer ${token}`,
            "content-type":"application/json"
        }
    })
    const body = await response.json()
    await logOutTokenStorage()
    return body;
}
export const Profile=async()=>{
    const token = await checkLoginAccessTokenStorage()
    const response = await fetch(`${BASE_URL}/profile`,{
        method:"POST",
        headers:{
            authorization:`Bearer ${token}`,
            "content-type":"application/json"
        }
    })
    
    const body = await response.json()
    if (!response.ok) {
        throw new Error(body.message || "Cannot load profile");
    }
    return body;
}
