import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Launch from "../screens/Launch";
import Login from "../screens/Login";

const NestedStack = createStackNavigator();
const LaunchStack = () => {
  return (
    <NestedStack.Navigator screenOptions={{ headerShown: false }}>
      <NestedStack.Screen name="Launch" component={Launch} />
    </NestedStack.Navigator>
  );
};
const LevelOne = () => {
  return (
    <NestedStack.Navigator screenOptions={{ headerShown: false }}>
      <NestedStack.Screen name="Login" component={Login} />
    </NestedStack.Navigator>
  );
};
export default {
  commonScreens: {
    LaunchStack,
    LevelOne,
  },
};
