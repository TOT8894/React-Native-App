import {Text,View,Pressable} from "react-native"
import {router} from "expo-router"
export default function Header(){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Pressable onPress={()=>router.push("/(auth)/registerScreen")}>
                <Text>register</Text>
            </Pressable>
            <Pressable onPress={()=>router.push("/(auth)/loginScreen")}>
                <Text>login</Text>
            </Pressable>
            <Pressable onPress={()=>router.push("/(app)/profile")}>
                <Text>Profile</Text>
            </Pressable>
        </View>
        
    )
}