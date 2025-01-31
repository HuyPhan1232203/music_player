import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SearchBarProps } from 'react-native-screens'
import { colors } from '@/constraints/tokens'
import { useNavigation } from 'expo-router'
const defaultSeachOptions: SearchBarProps = {
  tintColor: colors.primary,
  hideWhenScrolling: false,
  textColor: colors.text,
}
const useNavigationSearch = ({
  searchBarOption,
}: {
  searchBarOption?: SearchBarProps
}) => {
  const [search, setSearch] = useState('')
  const nav = useNavigation()
  const handleOnChangeText: SearchBarProps['onChangeText'] = ({
    nativeEvent: { text },
  }) => {
    setSearch(text)
  }
  useLayoutEffect(() => {
    nav.setOptions({
      headerSearchBarOptions: {
        ...defaultSeachOptions,
        ...searchBarOption,
        onChangeText: handleOnChangeText,
        colors: 'white',
      },
    })
  }, [nav, searchBarOption])
  return search
}

export default useNavigationSearch

const styles = StyleSheet.create({})
