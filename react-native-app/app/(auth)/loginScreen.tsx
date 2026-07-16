import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
export default function Login():React.JSX.Element{
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():void{
        if(!email.trim()){
           Alert.alert("Error","email is required") 
           return    
        }
        if(!password.trim()){
           Alert.alert("Error","password is required")   
           return  
        }
        if(password.trim().length < 8){
           Alert.alert("Error","password should be at least 8 character")     
           return
        }
        Alert.alert(
            "Login",
            "Logged in successfully",
           [    {text:"ok",onPress:()=>router.push("/")},
                {text:"canclel",onPress:()=>router.push("/loginScreen")}
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
                secureTextEntry
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