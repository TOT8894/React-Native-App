import { Link } from "expo-router";
import { useState } from "react";
import { Text,Button,Pressable,Alert, TextInput, View, TouchableOpacity } from "react-native";
export default function Index() {
  const[email,setEmail]=useState("")
  function handleclick(){
    console.log("bro stop clicking me")
  }
  function alerfunction(){
    Alert.alert(
      "Delete",
      "Delete unexpected user?",
      [
        {text:"cancel",onPress:()=>console.log("cancelled")},
        {text:"delete",onPress:()=>console.log(email)}
      ]
    )
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBlockColor:"red",
        borderWidth:4,
        
        margin:10,
        marginBottom:40,
      }}
    ><TextInput placeholder="Enter email" value={email} onChangeText={setEmail} style={{backgroundColor:"yellow",borderWidth:7,width:200,}}></TextInput>
    <Button title="click me" onPress={handleclick}></Button>
  
    
    <TouchableOpacity onPress={()=>console.warn("Warning")}>
        <Text>press</Text>
    </TouchableOpacity>
    <Pressable
      onPress={alerfunction}
      style={{
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "white" }}>Click Me</Text>
    </Pressable>
    <Link href="/Product">Product</Link>
    </View>
  );
}
