import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import {  ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import { useFonts as useOswald,Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato,Lato_400Regular } from "@expo-google-fonts/oswald";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurant.context"
import {LocationContextProvider} from "./src/services/location/location.context"

const Tab = createBottomTabNavigator();
const Setttings = ()=> <Text>Setttings </Text>;
const Map = ()=> <Text>Map</Text>;

export default function App() {
  const [oswalLoaded] =useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] =useLato({
    Oswald_400Regular
  });

  if(!oswalLoaded || !latoLoaded)
    {
      return null;
    }
  return (
    
  <>
  
  <ThemeProvider theme={theme}>
    <LocationContextProvider>
    <RestaurantsContextProvider>
    <NavigationContainer>
  <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Restaurants') {
        iconName = focused
          ? 'restaurant'
          : 'restaurant-outline';
      } else if  (route.name === 'Map') {
        iconName = focused ? 'map' : 'map-outline';
      }
      else if (route.name === 'Settings') {
        iconName = focused ? 'settings-sharp' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })} 
  
  >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Setttings} />
      </Tab.Navigator>
    </NavigationContainer>
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar/>
  </>
    
  

   
  );
}

