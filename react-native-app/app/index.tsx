import Footer from "@/src/component/common/BottomNavigation.tsx";
import { View, Image,Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Homepage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={require("../assets/images/image.png")} />
          <Text>Welcome to the Homepage!</Text>
        </View>
        <View>
          <Footer/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}