import { View,Text,StyleSheet,Image } from "react-native";
export default function Footer(){
    return(
        <>
            <View 
                style={style.footer}
            >
                <View style={style.icons_container}>
                    <Image
                        source={{
                        uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTayJxbGAh-0M-ahBg7pa_UYQ9U2G5VO_aDa57VcTE01nqtDUYz",
                        }}
                        style={style.icons}
                    />
                    <Text>Home</Text>
                </View>


                <View style={style.icons_container}>
                    <Image
                        source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/7322/7322293.png",
                        }}
                        style={style.icons}
                    />
                    <Text>Book Now</Text>
                </View>


                <View style={style.icons_container}>
                    <Image
                        source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTPCal_hBcXfWE828Wl33uVwDRlMvFg9Knc149YhDAA&s",
                        }}
                        style={style.icons}
                    />
                    <Text>Dine</Text>
                </View>


                <View style={style.icons_container}>
                    <Image
                        source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/3575/3575916.png",
                        }}
                        style={style.icons}
                    />
                    <Text>Order</Text>
                </View>


                <View style={style.icons_container}>
                    <Image
                        source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/1828/1828817.png",
                        }}
                        style={style.icons}
                    />
                    <Text>More</Text>
                </View>

                
            </View>
        </>
    )
}
const style = StyleSheet.create({
    footer:{   
        width:"98%",
        display:"flex",
        flex:1,
        gap:30,
        flexDirection:"row",
        justifyContent:"space-around",
        position:"absolute",
        bottom:5,
        
            
       
                
    },
    icons:{
        width:40,
        height:40,
        backgroundColor:"inherit"
      
    },
    icons_container:{
        alignItems: "center",
        cursor:"pointer",
        backgroundColor:"inherit"
    }
})