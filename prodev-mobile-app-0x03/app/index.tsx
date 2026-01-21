import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";


import { styles } from "@/styles/index";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Image source={require("@/assets/images/logo.png")} />
        </View>
        <Text style={styles.largeText}>Sign In to Your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>Enter your Email and Password to Sign In</Text>
        <View style={styles.formGroup}>
          <Text style={styles.placeholderText}>Email</Text>
          <TextInput style={styles.inputField} keyboardType="email-address" />
        </View>
        <View style={{marginTop:20}}>
          <Text style={styles.placeholderText}>Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput style={{flex:1}} />
            <FontAwesome name="eye-slash" size={24} color="black" />
          </View>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.subTextJoin}>Join now</Text>
        </View>
        
      </SafeAreaView>

    </SafeAreaProvider>
    
  );
}
