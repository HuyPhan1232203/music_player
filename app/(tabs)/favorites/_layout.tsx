import { StackScreenWithSearchBar } from '@/constraints/layout'
import { defaultStyles } from '@/styles/default'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const FavScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
        ></Stack.Screen>
      </Stack>
    </View>
  )
}
export default FavScreenLayout
