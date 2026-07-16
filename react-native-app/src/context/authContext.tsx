import { createContext, useContext, useEffect, useState } from "react"
import { Login,LogOut,Register,Profile } from "../lib/api"
import {  checkLoginAccessTokenStorage } from "../storage/tokenStorage"

const AuthContext=createContext<any>(null)
export default function AuthProvider({children}:any):React.JSX.Element{
        
    const [user,setUser]=useState<any>(null)
    const [token,setToken] = useState<any>(null)
    const [loading,setloading] = useState<boolean>(false)
    const [error,setError] = useState<string>("")
    const [message,setMessage] = useState<string>("")

    useEffect(()=>{
        loadToken()
    },[])

    useEffect(()=>{
        loadProfile()
    },[])

    async function loadToken(){
        const Token = await checkLoginAccessTokenStorage()
        setToken(Token)
    }
    async function loadUser(response:any){
        setUser(response?.data??response?.user)
    }
    async function login(data:any){
       const response = await Login(data)
       loadUser(response)
       loadToken()
    }
    async function register(data:any){
        const response = await Register(data)
        loadUser(response)
        loadToken()
    }
    async function logOut(){
        await LogOut()
        setToken(null)
        setUser(null)
    }
    async function loadProfile(){
        try{    
            setError("")
            setloading(true)
            const response = await Profile()
            loadUser(response)
            setMessage(response?.messsage??response?.data?.message)
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
            register,
            Profile:loadProfile
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