import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'
import React from 'react'
import { Track, useActiveTrack } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknowArtistImageUri, unknowTrackImageUri } from '@/constraints/images'
import { defaultStyles } from '@/styles/default'
import { colors, fontSize } from '@/constraints/tokens'
import {
  PlayPauseButton,
  SkipToNextButton,
  SkipToPreviusButton,
} from './PlayerControl'
import useLastActiveTrack from '@/hooks/useLastActiveTrack'
import MovingText from './MovingText'
import { useRouter } from 'expo-router'
const OnPlayTrack = ({ style }: ViewProps) => {
  const router = useRouter()
  const activeTrack = useActiveTrack()
  const lastActiveTrack = useLastActiveTrack()
  const handlePress = () => {
    router.navigate('/player')
  }
  const displayedTrack: Track = activeTrack ?? lastActiveTrack
  if (!displayedTrack) {
    return null
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      style={[styles.trackItemContainer, style]}
    >
      <>
        <FastImage
          source={{ uri: displayedTrack.artwork ?? unknowTrackImageUri }}
          style={styles.trackArtworkImage}
        />
        <View style={styles.trackTitleContainer}>
          <MovingText
            text={displayedTrack.title ?? ''}
            animationThreshold={25}
            style={styles.trackTitleText}
          ></MovingText>
          <Text style={styles.trackArtistText}>
            {displayedTrack.artist ?? 'Unknow artist'}
          </Text>
        </View>

        <PlayPauseButton iconSize={24} />
        <SkipToNextButton iconSize={24} />
      </>
    </TouchableOpacity>
  )
}

export default OnPlayTrack

const styles = StyleSheet.create({
  trackItemContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    padding: 8,
    paddingRight: 20,
    borderRadius: 12,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    fontWeight: '600',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: 10,
  },
})
