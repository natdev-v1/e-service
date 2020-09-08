import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <SafeAreaView>
        <Text>asdf</Text>
      </SafeAreaView>
    </View>
  );
};
