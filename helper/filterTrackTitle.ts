export const filterTrackTitle = (title: string) => (track: any) => {
  track.title?.toLowerCase().includes(title.toLowerCase())
}
