import { createContext, useContext, useEffect, useState } from "react"
import { Login,LogOut,Register,Profile } from "../lib/api"
import {  checkLoginAccessTokenStorage } from "../storage/tokenStorage"

const AuthContext=createContext<any>(null)
export default function AuthProvider({children}:any):React.JSX.Element{
        
    const [user,setUser]=useState<any>(null)
    const [token,setToken] = useState<any>(null)
    const [loading,setloading] = useState<boolean>(true)
    const [error,setError] = useState<string>("")
    const [message,setMessage] = useState<string>("")

    useEffect(()=>{
        initial()
    },[])
    async function initial(){
        const token = await loadToken()
        if(!token){
            return
        }
        await loadProfile()
    }
    async function loadToken(){
        const Token = await checkLoginAccessTokenStorage()
        setToken(Token)
        return Token
    }
    function loadUser(response:any){
        const user = response?.data??response?.user
        setUser(user)
    }
    async function login(data:any){
       const response = await Login(data)
       loadUser(response)
       await loadToken()
    }
    async function register(data:any){
        const response = await Register(data)
        loadUser(response)
        await loadToken()
    }
    async function logOut(){
        await LogOut()
        setToken(null)
        setUser(null)
        setError("")
        setMessage("")

    }
    async function loadProfile(){
        try{    
            setError("")
            setloading(true)
            const response = await Profile()
            loadUser(response)
            setMessage(response?.message??response?.data?.message)
        }
        catch(error:any){
            setError(error.message)
        }finally{
            setloading(false)
        }

    }

    return(
        <AuthContext.Provider value={{
            user,
            login,
            logOut,
            token,
            loading,
            message,
            error,
            isAuthenticate:Boolean(token),
            register,
            refreshProfile:loadProfile
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    const context = useContext(AuthContext)
    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }
    return context
}
