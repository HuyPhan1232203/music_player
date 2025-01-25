import { StackScreenWithSearchBar } from '@/constraints/layout'
import { defaultStyles } from '@/styles/default'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ ...StackScreenWithSearchBar, headerTitle: 'Artists' }}
        ></Stack.Screen>
      </Stack>
    </View>
  )
}
export default ArtistsScreenLayout
