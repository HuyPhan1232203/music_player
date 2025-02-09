import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { Slider } from 'react-native-awesome-slider'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import { useSharedValue } from 'react-native-reanimated'
import { formatSecondsToMinute } from '@/helper/miscellaneous'
import { colors, fontSize } from '@/constraints/tokens'
import { defaultStyles, utilsStyles } from '@/styles/default'

const PlayerProgressBar = ({ style }: ViewProps) => {
  const { duration, position } = useProgress(250)
  const isSliding = useSharedValue(false)
  const progress = useSharedValue(0)
  const min = useSharedValue(0)
  const max = useSharedValue(1)

  const trackElapsedTime = formatSecondsToMinute(position)
  const trackRemainingTime = formatSecondsToMinute(duration - position)
  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0
  }
  return (
    <View style={style}>
      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        containerStyle={utilsStyles.slider}
        thumbWidth={0}
        renderBubble={() => null}
        theme={{
          maximumTrackTintColor: colors.maximumTrackTintColor,
          minimumTrackTintColor: colors.minimumTrackTintColor,
        }}
        onSlidingStart={() => (isSliding.value = true)}
        onValueChange={async value => {
          await TrackPlayer.seekTo(value * duration)
        }}
        onSlidingComplete={async value => {
          if (!isSliding) return
          isSliding.value = false
          await TrackPlayer.seekTo(value * duration)
        }}
      />
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{trackElapsedTime}</Text>
        <Text style={styles.timeText}>{trackRemainingTime}</Text>
      </View>
    </View>
  )
}

export default PlayerProgressBar

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 20,
  },
  timeText: {
    ...defaultStyles.text,
    color: colors.text,
    opacity: 0.75,
    fontSize: fontSize.xs,
    letterSpacing: 0.7,
    fontWeight: 500,
  },
})
