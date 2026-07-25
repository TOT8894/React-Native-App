import {
  Pressable,
  TextInput,
  Alert,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/src/context/authContext";

export default function LoginScreen(): React.JSX.Element {
  const { login } = useAuth();

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handle(): Promise<void> {
    if (!email.trim()) {
      Alert.alert("Error", "Email is required");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Password is required");
      return;
    }

    if (password.trim().length < 8) {
      Alert.alert(
        "Error",
        "Password should be at least 8 characters"
      );
      return;
    }

    const user = {
      email: email.trim().toLowerCase(),
      password: password.trim(),
    };

    try {
      setLoading(true);

      await login(user);

      Alert.alert(
        "Login",
        "Logged in successfully",
        [
          {
            text: "OK",
            onPress: () => router.replace("/"),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          {/* Logo */}
          <Text style={styles.logo}>🏨</Text>

          {/* Heading */}
          <Text style={styles.title}>
            Welcome Back
          </Text>

          <Text style={styles.subtitle}>
            Login to continue your hotel experience
          </Text>

          {/* Email */}
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          {/* Password */}
          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
          />

          {/* Login button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              loading && styles.disabledButton,
              pressed && styles.pressedButton,
            ]}
            disabled={loading}
            onPress={handle}
          >
            <Text style={styles.buttonText}>
              {loading ? "Logging in..." : "Login"}
            </Text>
          </Pressable>

          {/* Register */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don't have an account?
            </Text>

            <Pressable
              onPress={() => router.push("/(auth)/register")}
            >
              <Text style={styles.registerLink}>
                Register
              </Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  logo: {
    fontSize: 64,
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 35,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    marginBottom: 20,
  },

  button: {
    height: 54,
    borderRadius: 12,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  disabledButton: {
    opacity: 0.6,
  },

  pressedButton: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 5,
  },

  registerText: {
    color: "#777",
    fontSize: 14,
  },

  registerLink: {
    color: "#222",
    fontSize: 14,
    fontWeight: "700",
  },
});