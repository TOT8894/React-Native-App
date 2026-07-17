import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/src/context/authContext";

export default function RegisterScreen():React.JSX.Element{

    const {register} = useAuth()
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [loading,setloading] = useState<boolean>(false)

    async function handle():Promise<void>{
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
        
        const user = {
            name:name.trim(),
            email:email.trim().toLowerCase(),
            password:password.trim()
        }
       
        try{
            await register(user);
            Alert.alert(
            "Registration",
            "registered successfully",
           [    {text:"ok",onPress:()=>router.replace("/")},
                
           ]
        )
        }catch(error:any){
            Alert.alert("error",`${error?.message}`||"something gone wrong in registration")
        }finally{
            setloading(false)
        }
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
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="*******"
                value={password}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setPassword}
            />
            <Pressable 
                style={{borderColor:"black",borderWidth:2,backgroundColor:"gray",}} 
                disabled={loading}
                onPress={handle}>
                {loading?
                    <Text style={{color: "white"}}>registering...</Text>
                    :<Text style={{color: "white"}}>register</Text>
                }
            </Pressable>
        </View>
    )
}
