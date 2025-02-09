import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { colors } from '@/constraints/tokens'
import Feather from '@expo/vector-icons/Feather'
import { Slider } from 'react-native-awesome-slider'
import { utilsStyles } from '@/styles/default'
import useTrackPlayerVolume from '@/hooks/useTrackPlayerVolume'

const PlayerVolumeBar = ({ style }: ViewProps) => {
  const { volume, updateVolume } = useTrackPlayerVolume()
  const progress = useSharedValue(0)
  const min = useSharedValue(0)
  const max = useSharedValue(1)
  progress.value = volume ?? 0
  return (
    <View style={style}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}
      >
        <Feather
          name='volume-1'
          size={20}
          style={{ opacity: 0.8, padding: 10 }}
          color={colors.icon}
        />
        <Slider
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          containerStyle={[utilsStyles.slider]}
          onValueChange={value => {
            updateVolume(value)
          }}
          renderBubble={() => null}
          theme={{
            maximumTrackTintColor: colors.maximumTrackTintColor,
            minimumTrackTintColor: colors.minimumTrackTintColor,
          }}
          thumbWidth={0}
        />
        <Feather
          name='volume-2'
          size={20}
          style={{ opacity: 0.8, padding: 10 }}
          color={colors.icon}
        />
      </View>
    </View>
  )
}

export default PlayerVolumeBar

const styles = StyleSheet.create({})
