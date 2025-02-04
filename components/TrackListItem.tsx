import { unknowTrackImageUri } from '@/constraints/images'
import { colors, fontSize } from '@/constraints/tokens'
import { defaultStyles } from '@/styles/default'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Track, useActiveTrack } from 'react-native-track-player'
import Entypo from '@expo/vector-icons/Entypo'
export type TrackListItemProp = {
  track: Track
  onTrackSelect: (track: Track) => void
}

export const TrackListItem = ({
  track,
  onTrackSelect: handleTrackSelect,
}: TrackListItemProp) => {
  const isActiveTrack = useActiveTrack()?.url === track.url

  return (
    <TouchableHighlight
      onPress={() => {
        handleTrackSelect(track)
      }}
    >
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknowTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>
        {/* Track title + artist */}
        <View style={{ width: '70%' }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          <Text numberOfLines={1} style={styles.trackArtistText}>
            {track.artist ?? 'Unknow artist'}
          </Text>
        </View>
        <Entypo name='dots-three-horizontal' size={24} color={colors.icon} />
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.xm,
    fontWeight: '600',
    maxWidth: '90%',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
})
