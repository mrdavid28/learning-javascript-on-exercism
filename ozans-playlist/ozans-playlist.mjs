// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
 export function removeDuplicates(playlist) {
  const unique_playlist = [...new Set(playlist)]
  return unique_playlist
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const ozans_playlist = new Set(playlist) 
  return ozans_playlist.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const ozans_playlist  = new Set(playlist)
  ozans_playlist.add(track)
  const ozans_playlist_array = [...ozans_playlist]
  return ozans_playlist_array
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const ozans_playlist  = new Set(playlist)
  ozans_playlist.delete(track)
  const ozans_playlist_array = [...ozans_playlist]
  return ozans_playlist_array
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let arr = []
  for(let loop_counter = 0; loop_counter<playlist.length;loop_counter++) {
    arr[loop_counter]= playlist[loop_counter].split(' - ')[1]
  }
  const unique_artist = [...new Set(arr)]
  return unique_artist
}

const playlist = [
  'Onu Alma Beni Al - Sezen Aksu',
  'Famous Blue Raincoat - Leonard Cohen',
  'Rakkas - Sezen Aksu',
];

listArtists(playlist);
//=> ['Portishead', 'Devendra Banhart']

console.log(listArtists(playlist))
