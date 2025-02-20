import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles } from '@/styles/default'
import TrackList from '@/components/TrackList'
import lib from '@/assets/data/library.json'
import { screenPadding } from '@/constraints/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { useFavorite } from '@/store/library'
import { SearchBar } from 'react-native-screens'
const FavScreen = () => {
  const search = useNavigationSearch({
    searchBarOption: {
      placeholder: 'Find a songs',
    },
  })
  const favTrack = useFavorite().fav
  const filterFavTrack = useMemo(() => {
    if (!search) return favTrack
    return favTrack.filter(track =>
      track?.title?.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search, favTrack])
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        style={{ paddingHorizontal: screenPadding.horizontal }}
        contentInsetAdjustmentBehavior='automatic'
      >
        <TrackList tracks={filterFavTrack} scrollEnabled={false} />
      </ScrollView>
    </View>
  )
}

export default FavScreen
