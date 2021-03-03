import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

var firebaseConfig = {
  apiKey: "AIzaSyC3qd_2hBf6wIqTARo61zrXFaIBg1-E2l0",
  authDomain: "mealstogo-1a733.firebaseapp.com",
  projectId: "mealstogo-1a733",
  storageBucket: "mealstogo-1a733.appspot.com",
  messagingSenderId: "437443226435",
  appId: "1:437443226435:web:d15747557c55cc952fddf6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
