import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles/default'
import { Track } from 'react-native-track-player'
export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
const TrackList = ({ tracks, ...FlatListProps }: TrackListProps) => {
  return (
    <FlatList
      data={tracks}
      contentInsetAdjustmentBehavior='automatic'
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
    />
  )
}

export default TrackList

const styles = StyleSheet.create({})
