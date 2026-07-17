import { Stack } from "expo-router";
import ProtectedRoute from "../(auth)/protectedRoute";

export default function AppLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{headerShown:false}}/>
    </ProtectedRoute>
  )
}