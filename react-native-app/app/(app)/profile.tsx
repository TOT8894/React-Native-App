import ProfileScreen from "../(auth)/profileScreen"
import ProtectedRoute from "../(auth)/protectedRoute"
export default function Profile():React.JSX.Element{

    return(
        <ProtectedRoute>
            <ProfileScreen/>
        </ProtectedRoute>
    )
}
