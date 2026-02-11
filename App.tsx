import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LoadingScreen } from './src/components';
import HomeScreen from './src/screens/HomeScreen';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing app)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || isLoading) {
    return (
      <>
        <LoadingScreen 
          message="Loading BiteBound..." 
          size="large" 
          color="#FF9644" 
        />
        <StatusBar style="auto" />
      </>
    );
  }

  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
