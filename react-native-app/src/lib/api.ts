import { login, logOut, register } from "../storage/tokenStorage";

export const Register=async(data:any)=>{
    const response = await fetch("api/v1/auth/register",{
        method:"POST",
        headers:{
            "content-type":"application/jsonn"
        },
        body:JSON.stringify(data)
    })
    const body = await response.json()
    const accessToken = body?.accesstoken??body?.data?.accessToken;
    const refreshToken = body?.refreshToken??body?.data?.refreshToken;
    register({accessToken,refreshToken})
    return body;
}
export const Login=async(data:any)=>{
    const response = await fetch("api/v1/auth/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const body = await response.json()
    const accessToken = body?.accesstoken??body?.data?.accessToken;
    const refreshToken = body?.refreshToken??body?.data?.refreshToken;
    login({accessToken,refreshToken})
    return body;
}
export const LogOut=async()=>{
    const response = await fetch("api/v1/auth/logout",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        }
    })
    const body = await response.json()
    logOut()
    return body;
}
export const Profile=async(token:any)=>{
    const headers:any={};
    headers["authorization"] = `Bearer ${token}`;
    headers["content-type"] = "application/json";
    const response = await fetch("api/v1/auth/profile",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(token)
    })
    const body = await response.json()
    return body;
}
