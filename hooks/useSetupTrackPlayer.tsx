import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'
const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  })
  await TrackPlayer.setVolume(0.03)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}
const useSetupTrackPlayer = ({ onload }: { onload?: () => void }) => {
  const init = useRef(false)
  useEffect(() => {
    setupPlayer()
      .then(() => {
        init.current = true
        onload?.()
      })
      .catch(err => {
        init.current = false
        console.error(err)
      })
  }, [onload])
}

export default useSetupTrackPlayer

const styles = StyleSheet.create({})
