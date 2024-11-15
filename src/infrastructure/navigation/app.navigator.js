import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites1.context";
import {SettingsScreen} from "../../features/Settings/screens/settings.screen"
import {SettingsNavigator} from "./setting.navigator"
const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Restaurant") {
                iconName = focused ? "restaurant" : "restaurant-outline";
              } else if (route.name === "Map") {
                iconName = focused ? "map" : "map-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings-sharp" : "settings-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
