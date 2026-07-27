import { View,Text, ScrollView, ImageBackground,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Homepage() {
  return (
    <SafeAreaView>
      <ScrollView>
       <View style={style.main}>
            <View>
                <ImageBackground
                style={{width:380,height:300,margin:5}}
                source={require("../../assets/images/image.png")} />
            
            </View>
            
                <View style={style.profile}>  
                    <Text style={{fontWeight:"bold",fontSize:30,color:"white" }}>Good Morning, Yared 🙋‍♂️</Text>
                    <Text style={{fontWeight:"bold",fontSize:20,color:"yellow" }}>Welcome to Genet Hotel !</Text>
                </View>
                
                <View style={style.text}>
                    <Text style={{fontWeight:"bold",fontSize:20,color:"black" }}>Bole, Addis Ababa</Text>
                    <Text style={{color:"black",fontWeight:"bold"}}>what would you like to do?</Text>
                </View>
            
            <View style={style.flex}>
                <View >
                    <Text style={style.flex_box}>
                        Book A room
                    </Text>
                </View>
                <View >
                    <Text style={style.flex_box}>
                        Order Food
                    </Text>
                </View>
                <View>
                    <Text style={style.flex_box}>
                        My Booking
                    </Text>
                </View>
            </View>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
    main:{
        display:"flex",
        flexDirection:"column",
        position:"relative",       
    },
    flex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        gap:5,
        marginTop:20,
    },
    flex_box:{
        backgroundColor:"green",
        padding:5,
        color:"white",
        fontWeight:600,
        cursor:"pointer",
        borderRadius:20,
        paddingHorizontal:15,
        paddingVertical:10,
    },
    profile:{
        marginBottom:15,
        alignItems:"center", 
        position:"absolute",
        top:220,
        left:20,
    },
    text:{
        alignItems:"center",
    }
})