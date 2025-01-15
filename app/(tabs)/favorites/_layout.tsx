import { defaultStyles } from '@/styles/default'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const FavScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerTitle: 'Fav' }}
        ></Stack.Screen>
      </Stack>
    </View>
  )
}
export default FavScreenLayout
