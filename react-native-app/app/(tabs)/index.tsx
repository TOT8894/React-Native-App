import { View,Text, ScrollView, ImageBackground,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Homepage() {
  return (
    <SafeAreaView>
      <ScrollView>
       <View>
          <View>
            <ImageBackground
             style={{width:380,height:300,margin:5}}
             source={require("../../assets/images/image.png")} />
           
          </View>
          <View>
            <View style={style.greeting_view}>
                 <Text style={{fontWeight:"bold",fontSize:15, }}>Good Morning, Yared 🙋‍♂️</Text>
                 <Text style={{fontWeight:"bold",fontSize:20, }}>Welcome to Genet Hotel !</Text>
                <Text>Bole, Addis Ababa</Text>
            </View>
            <View style={style.greeting_view}>
                <Text style={{color:"black",fontWeight:"bold"}}>what would you like to do?</Text>
            </View>
            <View style={style.flex}>
                <View style={style.flex_box}>
                    <Text>
                        Book A room
                    </Text>
                </View>
                <View style={style.flex_box}>
                    <Text>
                        Order Food
                    </Text>
                </View>
                <View style={style.flex_box}>
                    <Text>
                        My Booking
                    </Text>
                </View>
            </View>
          </View>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
    flex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        gap:5,
        marginTop:20,

    },
    flex_box:{
        backgroundColor:"pink",
        padding:5,

    },
    greeting_view:{
        marginBottom:15,
        alignItems:"center"
    }
})