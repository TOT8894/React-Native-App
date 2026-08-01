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
          alignSelf: "center",
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
