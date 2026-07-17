import { Stack } from "expo-router";
import ProtectedRoute from "../../../React-Native-App/react-native-app/app/(auth)/protectedRoute";

export default function AppLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{headerShown:false}}/>
    </ProtectedRoute>
  )
}