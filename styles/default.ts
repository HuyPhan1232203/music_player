import { colors, fontSize } from '@/constraints/tokens'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgound,
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text,
  },
  textHeader: {
    color: colors.text,
    fontWeight: 700,
    fontSize: 40,
  },
})
export const utilsStyles = StyleSheet.create({
  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSeparator: {
    borderColor: colors.textMuted,
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.3,
  },
  emptyContentText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 20,
  },
  slider: {
    height: 7,
    borderRadius: 16,
  },
})
