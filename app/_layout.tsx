import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useLogTrackPlayerState from '@/hooks/useLogTrackPlayerState'
import useSetupTrackPlayer from '@/hooks/useSetupTrackPlayer'
SplashScreen.preventAutoHideAsync()
  .then(() => {
    console.log('prevent splash screen successfully')
  })
  .catch(console.warn)
const App = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  }, [])
  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  })
  useLogTrackPlayerState()

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  )
}
const RootNavigation = () => (
  <Stack>
    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
  </Stack>
)

export default App
