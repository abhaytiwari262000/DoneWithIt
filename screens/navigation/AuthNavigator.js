import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../WelcomeScreen";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
