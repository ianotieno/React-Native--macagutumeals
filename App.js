import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigator } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites1.context";
import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu9KQKkxyWT66nCEepjJjDmTyzK04N5G0",
  authDomain: "macagutumeals.firebaseapp.com",
  projectId: "macagutumeals",
  storageBucket: "macagutumeals.firebasestorage.app",
  messagingSenderId: "397904268460",
  appId: "1:397904268460:web:cddddf090a840e0f6aa309"
};

const app = initializeApp(firebaseConfig);

export default function App() {
 

 

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        </AuthenticationContextProvider>
        
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
