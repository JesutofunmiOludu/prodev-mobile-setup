import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.companyLOGO}>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>
          <View style ={styles.buttonGroup}>
            <TouchableOpacity style = {styles.button}>
              <Text style={{...styles.textSmall, color: "Black"}}>Join Here</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.transparentButton}>
              <Text style = {styles.textSmall}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  companyLOGO: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // Add additional styling here
  },

  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});

