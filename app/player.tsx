import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles, utilsStyles } from '@/styles/default'
import { colors, fontSize, screenPadding } from '@/constraints/tokens'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknowTrackImageUri } from '@/constraints/images'
import MovingText from '@/components/MovingText'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { PlayerControls } from '@/components/PlayerControl'
import PlayerProgressBar from '@/components/PlayerProgressBar'
import PlayerVolumeBar from '@/components/PlayerVolumeBar'
import PlayerRepeatToggle from '@/components/PlayerRepeatToggle'
import usePlayerBackground from '@/hooks/usePlayerBackground'
import { LinearGradient } from 'react-native-linear-gradient'
const PlayerScreen = () => {
  const { top, bottom } = useSafeAreaInsets()
  const activeTrack = useActiveTrack()
  const { imageColors } = usePlayerBackground(
    activeTrack?.artwork ?? unknowTrackImageUri,
  )
  const isFavorite = false
  const toggleFavorite = () => {}
  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    )
  }
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={
        imageColors
          ? [imageColors.background, imageColors.primary]
          : [colors.backgound]
      }
    >
      <View style={styles.overlatContainer}>
        <DismissPlayerSymbol />
        <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
          <View style={styles.artworkImageContainer}>
            <FastImage
              source={{
                uri: activeTrack.artwork ?? unknowTrackImageUri,
                priority: FastImage.priority.high,
              }}
              resizeMode='cover'
              style={styles.artworkImage}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 'auto' }}>
              <View style={{ height: 60 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* title */}
                  <View style={styles.titleTextContainer}>
                    <MovingText
                      text={activeTrack.title ?? ''}
                      animationThreshold={30}
                      style={styles.titleText}
                    />
                  </View>
                  {/* Favorite icon */}
                  <FontAwesome
                    name={isFavorite ? 'heart' : 'heart-o'}
                    size={20}
                    color={isFavorite ? colors.primary : colors.icon}
                    style={{ marginHorizontal: 14 }}
                    onPress={toggleFavorite}
                  />
                </View>
                {/* artist */}
                <Text
                  numberOfLines={1}
                  style={[styles.artistText, { marginTop: 6 }]}
                >
                  {activeTrack.artist ?? 'Unknow artist'}
                </Text>
              </View>
              <PlayerProgressBar style={{ marginTop: 32 }} />
              <PlayerControls style={{ marginTop: 40 }} />
            </View>
            <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />
          </View>
          <View style={utilsStyles.centeredRow}>
            <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets()
  return (
    <View
      style={{
        position: 'absolute',
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View
        accessible={false}
        style={{
          width: 50,
          height: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
          opacity: 0.7,
        }}
      ></View>
    </View>
  )
}
export default PlayerScreen

const styles = StyleSheet.create({
  overlatContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  titleTextContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  titleText: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: 700,
  },
  artistText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: '90%',
  },
})
