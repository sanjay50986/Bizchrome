import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native"; 
import ClientCreateAccount from "../src/Auth/ClientCreateAccount";
import FreelenceCreateAccount from "../src/Auth/FreelenceCreateAccount";
import Login from "../src/Auth/Login";



// Prevent auto hide
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // wait until fonts load
  }

  return (
    <View style={{ flex: 1 }}>
      <Login/>
    </View>
  );
}
