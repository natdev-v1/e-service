import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import images from "../../util/refImage";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../../components/TextInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logoText} source={images.samsung_text}></Image>
        <Image style={styles.logoImage} source={images.samsung_logo}></Image>
      </SafeAreaView>
      <View style={styles.containerFormLogin}>
        <TextInput></TextInput>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "#FCFDFF",
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
    marginTop: hp("-4"),
  },

  containerFormLogin: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "#D9D9D9",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
