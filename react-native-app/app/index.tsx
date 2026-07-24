import Footer from "@/src/component/common/BottomNavigation.tsx";
import { View, ScrollView } from "react-native";
import  { SafeAreaView } from "react-native-safe-area-context";
import Homepage from "./(tabs)";
export default function APP() {
  return (
    <SafeAreaView>
      <ScrollView>
       <View
          style={{
          marginTop:50,
          width: 400,
          height: 700,
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 2,
          borderRadius:10,
          position:"relative",
          padding:5,
          display:"flex"
          }}
        >
          <Homepage/>
          <Footer/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}