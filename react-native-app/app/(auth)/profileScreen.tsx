import { useAuth } from "@/src/context/authContext"
import { useEffect } from "react";
import {View,Text} from "react-native"
export default function ProfileScreen():React.JSX.Element{
    const {user,refreshProfile}:any=useAuth(); 
    useEffect(()=>{
        refreshProfile()
    },[])
    return(
        <View>
            <Text>name: {user?.name}</Text>
            <Text>email: {user?.email} </Text>
            <Text>hashedpassword: {user?.password} </Text>
        </View>
    )
}
