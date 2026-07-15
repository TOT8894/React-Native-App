import { View } from "react-native";
import Register from "./(auth)/registerScreen";
import Login from "./(auth)/loginScreen";
export default function Index() {
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
    > <Register/>
      <Login/>
 
    </View>
  );
}
