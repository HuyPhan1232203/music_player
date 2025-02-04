import { colors } from '@/constraints/tokens'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'

type PlayerControlsProps = {
  style?: ViewStyle
}
type PlayerButtonProps = {
  style?: ViewStyle
  iconSize?: number
}
export const PlayPauseButton = ({ style, iconSize }: PlayerButtonProps) => {
  const { playing } = useIsPlaying()
  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
      >
        <FontAwesome
          name={playing ? 'pause' : 'play'}
          size={24}
          color={colors.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        TrackPlayer.skipToNext()
      }}
    >
      <Ionicons name='play-skip-forward-sharp' size={24} color={colors.icon} />
    </TouchableOpacity>
  )
}
export const SkipToPreviusButton = ({ iconSize = 30 }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        TrackPlayer.skipToPrevious()
      }}
    >
      <Ionicons name='play-skip-back-sharp' size={24} color={colors.icon} />
    </TouchableOpacity>
  )
}
