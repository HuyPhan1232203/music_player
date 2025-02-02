import { SplashScreen, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import useSetupTrackPlayer from '@/hooks/useSetupTrackPlayer'
import { useCallback } from 'react'
SplashScreen.preventAutoHideAsync()
const App = () => {
  // const handleTrackPlayerLoaded = useCallback(() => {
  //   try {
  //     SplashScreen.hideAsync()
  //   } catch {
  //     console.log('handleTrackPlayerLoaded error')
  //   }
  // }, [])
  // try {
  //   useSetupTrackPlayer({
  //     onload: handleTrackPlayerLoaded,
  //   })
  // } catch {
  //   console.log('object')
  // }
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  )
}
const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}
export default App
