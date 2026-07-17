import {useAuth} from "@/src/context/authContext"
import {View,ActivityIndicator} from "react-native"
import {router} from "expo-router"
import { useEffect } from "react"
export default function ProtectedRoute({children}:any){

    const {loading,isAuthenticate} = useAuth()
    useEffect(()=>{
        if(!loading && !isAuthenticate){
            router.replace("/(auth)/loginScreen")
        }
    },[loading,isAuthenticate])

    if(loading){
        return(
            <View>
                <ActivityIndicator color="red" size="large" />
            </View>
        )
    }  
    if(!isAuthenticate){
        return null
    }
    return(
        <View>
            {children}
        </View>
    )

}