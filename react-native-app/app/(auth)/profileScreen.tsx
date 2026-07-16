import { useAuth } from "@/src/context/authContext"
import { Profile } from "@/src/lib/api";
import { useState } from "react";
import {View,Text,Pressable} from "react-native"
export default function ProfileScreen():React.JSX.Element{
    const {token}:any=useAuth(); 
    const [user,setuser]:any = useState<any>({})
    
    async function handle(){
       const response = await Profile(token)
       const body = await response.json()
       setuser(body.data)
    }
    return(
        <View>
            <Pressable onPress={handle}>
                <Text>view profile</Text>
            </Pressable>
        </View>
    )
}