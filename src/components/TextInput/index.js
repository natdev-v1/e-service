import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default (props) => {
  const { containerStyle, errorMessage, inputContainerStyle } = props;
  return (
    <Input
      containerStyle={{ ...styles.containerInput, ...containerStyle }}
      // inputStyle={{ borderBottomWidth: 0, backgroundColor: "green" }}
      inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      errorMessage={errorMessage}
    ></Input>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    padding: 0,
  },
  inputContainerStyle: {
    height: hp(5),
    borderRadius:10,
    borderBottomWidth: 0,
    backgroundColor:'white',
    paddingLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
