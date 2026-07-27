import AuthProvider from "@/src/context/authContext";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{headerShown:false}} />
    </AuthProvider>
  )
}