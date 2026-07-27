import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.title}>
            More
          </Text>

          <Text style={styles.subtitle}>
            Manage your Genet Hotel experience
          </Text>

          {/* Profile */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push("/profile")}
          >
            <Text style={styles.icon}>👤</Text>

            <View>
              <Text style={styles.menuTitle}>
                Profile
              </Text>

              <Text style={styles.menuDescription}>
                Manage your personal information
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* Settings */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push("/settings")}
          >
            <Text style={styles.icon}>⚙️</Text>

            <View>
              <Text style={styles.menuTitle}>
                Settings
              </Text>

              <Text style={styles.menuDescription}>
                Manage your app preferences
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* Help */}
          <Pressable style={styles.menuItem}>
            <Text style={styles.icon}>💬</Text>

            <View>
              <Text style={styles.menuTitle}>
                Help & Support
              </Text>

              <Text style={styles.menuDescription}>
                Contact our support team
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* About */}
          <Pressable style={styles.menuItem}>
            <Text style={styles.icon}>🏨</Text>

            <View>
              <Text style={styles.menuTitle}>
                About Genet Hotel
              </Text>

              <Text style={styles.menuDescription}>
                Learn more about our hotel
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          {/* Login */}
          <Pressable
            style={styles.loginButton}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.loginText}>
              🔐 Login
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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

  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
    marginBottom: 25,
  },

  menuItem: {
    minHeight: 75,
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
    marginBottom: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  menuDescription: {
    color: "#777",
    marginTop: 4,
  },

  arrow: {
    fontSize: 30,
    color: "#777",
    marginLeft: "auto",
  },

  loginButton: {
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },

  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});