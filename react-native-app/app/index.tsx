import { Pressable,Text, View } from "react-native";
import { Homepage } from "./(app)/home";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Homepage/>
    </View>
  );
}
