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

export default function RegisterScreen(): React.JSX.Element {
  const { register } = useAuth();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handle(): Promise<void> {
    if (!name.trim()) {
      Alert.alert("Error", "Name is required");
      return;
    }

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
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
    };

    try {
      setLoading(true);

      await register(user);

      Alert.alert(
        "Registration",
        "Registered successfully",
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
        error?.message ||
          "Something went wrong during registration"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
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
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Create your account and enjoy a better
            hotel experience
          </Text>

          {/* Name */}
          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
          />

          {/* Email */}
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
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
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setPassword}
          />

          {/* Register button */}
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
              {loading
                ? "Registering..."
                : "Create Account"}
            </Text>
          </Pressable>

          {/* Login link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>

            <Pressable
              onPress={() =>
                router.push("/(auth)/login")
              }
            >
              <Text style={styles.loginLink}>
                Login
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
    height: 700,
    width: 400,
    marginTop:50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius:10,
    position:"relative",
    padding:5,
    display:"flex"
    
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
    lineHeight: 22,
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

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 5,
  },

  loginText: {
    color: "#777",
    fontSize: 14,
  },

  loginLink: {
    color: "#222",
    fontSize: 14,
    fontWeight: "700",
  },
});