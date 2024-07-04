import '@styles/global.css';
import { Stack } from 'expo-router';
import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from '@expo-google-fonts/sora';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={'default'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Games/[param]" />
        <Stack.Screen name="GameDetails/[slug]" />
      </Stack>
    </QueryClientProvider>
  );
}
