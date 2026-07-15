import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
export default function Register():any{
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():any{
        Alert.alert(
            "Registration",
            "registered successfully",
           [    {text:"ok",onPress:()=>router.push("/loginScreen")},
                {text:"canclel",onPress:()=>router.push("/")}
           ]
        )
    }
    return(
        <View>
            <TextInput
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
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
                style={{borderBlockColor:"black",borderWidth:2,backgroundColor:"gray",}} 
                onPress={handle}>
                <Text style={{color: "white"}}>register</Text>
            </Pressable>
        </View>
    )
}