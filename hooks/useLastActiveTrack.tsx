import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Track, useActiveTrack } from 'react-native-track-player'

const useLastActiveTrack = () => {
  const activeTrack = useActiveTrack()
  const [lastActiveTrack, setLastActiveTrack] = useState<Track>()
  useEffect(() => {
    if (!activeTrack) return
    setLastActiveTrack(activeTrack)
  }, [activeTrack])
  return lastActiveTrack
}

export default useLastActiveTrack

const styles = StyleSheet.create({})
