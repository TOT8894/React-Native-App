import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
export default function Register():React.JSX.Element{
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():any{
        if(!name.trim()){
           Alert.alert("name is required") 
           return    
        }
        if(!email.trim()){
           Alert.alert("email is required")    
           return 
        }
        if(!password.trim()){
           Alert.alert("password is required") 
           return    
        }
        if(!(password.trim().length > 8)){
           Alert.alert("password is short")   
           return  
        }
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