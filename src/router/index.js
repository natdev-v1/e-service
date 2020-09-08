import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Launch from "../screens/Launch";

const launchStack = () => {
  const NestedStack = createStackNavigator();

  return (
    <NestedStack.Navigator screenOptions={{ headerShown: false }}>
      <NestedStack.Screen name="Launch" component={Launch} />
    </NestedStack.Navigator>
  );
};

export default {
  commonScreens: {
    launchStack,
  },
};
