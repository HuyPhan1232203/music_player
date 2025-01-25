import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles/default'
export type TrackListProps = Partial<FlatListProps<unknown>>
const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
const TrackList = ({ ...FlatListProps }: TrackListProps) => {
  return (
    <FlatList
      data={library}
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
