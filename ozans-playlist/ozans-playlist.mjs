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
  throw new Error('Please implement the listArtists function');
}

const playlist = [
  'The Fashion Show - Grace Jones',
  'Dr. Funkenstein - Parliament',
];

hasTrack(playlist, 'Dr. Funkenstein - Parliament');
//=> true

hasTrack(playlist, 'Walking in the Rain - Grace Jones');
//=> false


console.log(hasTrack(playlist, 'Dr Funkenstein - Parliament'))