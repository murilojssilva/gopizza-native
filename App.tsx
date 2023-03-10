import React from "react";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { SignIn } from "@screens/SignIn";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </ThemeProvider>
  );
}
