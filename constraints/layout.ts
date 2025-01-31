import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'
export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.backgound,
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerStyle: {
    backgroundColor: colors.backgound,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
}
