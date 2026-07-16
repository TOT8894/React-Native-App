import {View,Text,Pressable} from "react-native"
import {handle} from "../(auth)/profileScreen"
export default function ProfileScreen():React.JSX.Element{
    return(
        <View>
           <Pressable onPress={handle}>
                <Text>view profile</Text>
            </Pressable>

        </View>
    )
}