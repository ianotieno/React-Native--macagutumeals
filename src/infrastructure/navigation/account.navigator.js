import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main">
      {() => (
        <View>
          <Text>Account Screen</Text>
        </View>
      )}
    </Stack.Screen>
    <Stack.Screen name="Login">
      {() => (
        <View>
          <Text>Login Screen</Text>
        </View>
      )}
    </Stack.Screen>
    <Stack.Screen name="Register">
      {() => (
        <View>
          <Text>Register Screen</Text>
        </View>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
