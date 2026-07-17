import Header from "@/component/header";
import Footer from "@/component/footer";
import Nav from "@/component/nav";
import { View } from "react-native";
export default function Homepage(){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Header/>
            <Nav/>
            <Footer/>
        </View>
       
    )
}
