import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles/default'
import TrackList from '@/components/TrackList'

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <TrackList
        ListHeaderComponent={<Text style={styles.header}>My Songs</Text>} // Optional header
        // You can add other props as needed
      />
    </View>
  )
}

export default SongsScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
})
