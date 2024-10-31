import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurant.navigator';
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;


export const AppNavigator = () => (
  <NavigationContainer  >
    <Tab.Navigator 
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
 
          if (route.name === 'Restaurant') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantsNavigator}  />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
