import React from "react";
import { SettingsScreen } from "../../features/Settings/screens/settings.screen";
import { FavouriteScreen } from "../../features/Settings/screens/favourite.screen";
import { CameraScreen } from "../../features/Settings/screens/camera.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouriteScreen}/>
      <SettingsStack.Screen name="Camera" component={CameraScreen}/>
    </SettingsStack.Navigator>
  );
};
