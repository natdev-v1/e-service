import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import images from "../../util/refImage";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default () => {
  return (
    <LinearGradient
      colors={["#0C4DA1", "#528AD1"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logoText}
          source={images.samsung_text_white}
        ></Image>
        <Image
          style={styles.logoImage}
          source={images.samsung_logo_white}
        ></Image>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  logoText: {
    width: wp("30"),
    height: hp("10"),
    resizeMode: "stretch",
  },
  logoImage: {
    width: wp("120"),
    height: hp("32"),
    resizeMode: "stretch",
    alignSelf: "center",
    marginTop: hp("5"),
  },
  container: { flex: 1 },
});
