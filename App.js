import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Router from "./src/router";

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries({
          // Use the screens normally
          ...Router.commonScreens,
          // Use some screens conditionally
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            options={{ headerShown: false }}
            name={name}
            component={component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
