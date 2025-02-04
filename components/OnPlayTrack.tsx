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
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  PlayPauseButton,
  SkipToNextButton,
  SkipToPreviusButton,
} from './PlayerControl'
import useLastActiveTrack from '@/hooks/useLastActiveTrack'
const OnPlayTrack = ({ style }: ViewProps) => {
  const activeTrack = useActiveTrack()
  const lastActiveTrack = useLastActiveTrack()

  const displayedTrack: Track = activeTrack ?? lastActiveTrack
  if (!displayedTrack) {
    return null
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.trackItemContainer, style]}
    >
      <>
        <FastImage
          source={{ uri: displayedTrack.artwork ?? unknowTrackImageUri }}
          style={styles.trackArtworkImage}
        />
        <View style={styles.trackTitleContainer}>
          <Text style={styles.trackTitleText}>{displayedTrack.title}</Text>
          <Text style={styles.trackArtistText}>
            {displayedTrack.artist ?? 'Unknow Artist'}
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
    maxWidth: '90%',
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
