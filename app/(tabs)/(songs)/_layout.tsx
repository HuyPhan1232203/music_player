import { StackScreenWithSearchBar } from '@/constraints/layout'
import { defaultStyles } from '@/styles/default'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Songs',
          }}
        ></Stack.Screen>
      </Stack>
    </View>
  )
}
export default SongsScreenLayout
