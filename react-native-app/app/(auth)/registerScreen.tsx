import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Register } from "../../src/lib/api";
export default function RegisterScreen():React.JSX.Element{
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    function handle():void{
        if(!name.trim()){
           Alert.alert("Error","name is required") 
           return    
        }
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
            "Registration",
            "registered successfully",
           [    {text:"ok",onPress:()=>router.push("/loginScreen")},
                {text:"canclel",onPress:()=>router.push("/")}
           ]
        )
        const user = {
            name:name,
            email:email,
            password:password
        }
        Register(user);
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
                secureTextEntry
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