import { Pressable,Text, View } from "react-native";
import {router} from "expo-router"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
    <Pressable onPress={()=>router.push("/(auth)/registerScreen")}>
      <Text>Go to register</Text>
    </Pressable>
        <Pressable onPress={()=>router.push("/(auth)/loginScreen")}>
      <Text>Go to login</Text>
    </Pressable>
    </View>
  );
}
