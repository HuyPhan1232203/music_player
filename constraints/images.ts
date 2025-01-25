import { Image } from 'react-native'
import unknowArtistImage from '../assets/images/unknown_artist.png'
import unknowTrackImage from '../assets/images/unknown_track.png'
export const unknowArtistImageUri =
  Image.resolveAssetSource(unknowArtistImage).uri
export const unknowTrackImageUri =
  Image.resolveAssetSource(unknowTrackImage).uri
