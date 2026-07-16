import { Pressable, View,Text } from "react-native";
import {router} from "expo-router"
export function Homepage(){
    return(
        <View>
            <Pressable onPress={()=>router.push("/(auth)/registerScreen")}>
                <Text>Go to register</Text>
            </Pressable>
            <Pressable onPress={()=>router.push("/(auth)/loginScreen")}>
                 <Text>Go to login</Text>
            </Pressable>
            <Pressable onPress={()=>router.push("/(app)/profile")}>
                 <Text>profile</Text>
            </Pressable>
        </View>
    )
}