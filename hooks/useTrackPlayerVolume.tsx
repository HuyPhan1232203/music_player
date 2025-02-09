import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import TrackPlayer from 'react-native-track-player'
import {
  getVolume,
  setVolume,
} from 'react-native-track-player/lib/src/trackPlayer'

const useTrackPlayerVolume = () => {
  const [volume, setVolume] = useState<number | undefined>(undefined)
  const getVolume = useCallback(async () => {
    const currentVolume = await TrackPlayer.getVolume()
    setVolume(currentVolume)
  }, [])
  const updateVolume = useCallback(async (newVolume: number) => {
    if (newVolume < 0 || newVolume > 1) return
    setVolume(volume)
    await TrackPlayer.setVolume(newVolume)
  }, [])
  useEffect(() => {
    getVolume()
  }, [[getVolume]])
  return { volume, updateVolume }
}

export default useTrackPlayerVolume

const styles = StyleSheet.create({})
