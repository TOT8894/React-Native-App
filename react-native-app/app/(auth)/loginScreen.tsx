import { Pressable, TextInput,Alert, View,Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/src/context/authContext";

export default function LoginScreen():React.JSX.Element{

    const {login} = useAuth()
    const [password,setPassword] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)

    async function handle():Promise<void>{
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
            email:email.trim().toLowerCase(),
            password:password.trim()
        }
        try{
            setLoading(true)
            await login(user)
            Alert.alert(
            "Login",
            "Logged in successfully",
           [    {text:"ok",onPress:()=>router.replace("/")}, 
            ]
        )
        }catch(error:any){
            Alert.alert("error",`${error?.message}`||"something gone wrong")
        }finally{
            setLoading(false)
        }
    }
    return(
        <View>
            <TextInput
                placeholder="Enter email"
                value={email}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="*******"
                value={password}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setPassword}
            />
            <Pressable
                style={{borderColor:"black",borderWidth:2,backgroundColor:"gray"}} 
                disabled={loading}
                onPress={handle}>
                {loading?
                    <Text style={{color: "white"}}>logging in...</Text>
                    :<Text style={{color: "white"}}>login</Text>
                }
            </Pressable>
        </View>
    )
}
