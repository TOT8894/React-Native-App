import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
export default function Login():any{
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():any{
        Alert.alert(
            "Login",
            "Logged in successfully",
           [    {text:"ok",onPress:()=>console.log(email)},
                {text:"canclel",onPress:()=>console.warn(email)}
           ]
        )
    }
    return(
        <View>
            <TextInput
                placeholder="Enter email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="*******"
                value={password}
                onChangeText={setPassword}
            />
            <Pressable
                style={{borderBlockColor:"black",borderWidth:2,backgroundColor:"gray"}} 
                onPress={handle}>
                <Text style={{color: "white"}}>login</Text>
            </Pressable>
        </View>
    )
}