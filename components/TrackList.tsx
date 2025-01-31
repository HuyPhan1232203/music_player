import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles/default'
export type TrackListProps = Partial<FlatListProps<unknown>> & {
  tracks: any[]
}
const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
const TrackList = ({ tracks, ...FlatListProps }: TrackListProps) => {
  return (
    <FlatList
      contentInsetAdjustmentBehavior='automatic'
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
    />
  )
}

export default TrackList

const styles = StyleSheet.create({})
