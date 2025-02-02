import { ScrollView, View } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { defaultStyles } from '@/styles/default'
import TrackList from '@/components/TrackList'
import { screenPadding } from '@/constraints/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import lib from '@/assets/data/library.json'
const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOption: {
      placeholder: 'Find in songs',
    },
  })
  const filterSongs = useMemo(() => {
    if (search == null) return lib
    return lib.filter(track =>
      track?.title.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search])
  return (
    <View style={defaultStyles.container}>
      <View style={{ paddingHorizontal: screenPadding.horizontal }}>
        <TrackList tracks={filterSongs} scrollEnabled={false} />
      </View>
    </View>
  )
}
export default SongsScreen
