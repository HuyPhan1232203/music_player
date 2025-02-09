import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles/default'
import TrackPlayer, { Track } from 'react-native-track-player'
export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
const TrackList = ({ tracks, ...FlatListProps }: TrackListProps) => {
  const handleTrackSelect = async (track: Track) => {
    console.log(track)
    await TrackPlayer.load(track)
    await TrackPlayer.play()
  }
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
      contentInsetAdjustmentBehavior='automatic'
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      ListEmptyComponent={
        <View>
          <Text style={utilsStyles.emptyContentText}>No songs found</Text>
        </View>
      }
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...FlatListProps}
    />
  )
}

export default TrackList

const styles = StyleSheet.create({})
