import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import {  ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import { useFonts as useOswald,Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato,Lato_400Regular } from "@expo-google-fonts/oswald";

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
  <RestaurantsScreen/>
    </ThemeProvider>
    <ExpoStatusBar/>
  </>
    
  

   
  );
}

