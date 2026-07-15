import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
export default function Register():any{
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():any{
        Alert.alert(
            "Registration",
            "registered successfully",
           [    {text:"ok",onPress:()=>console.log(email,name)},
                {text:"canclel",onPress:()=>console.warn(email,name)}
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