var playlist = {Soul: 'Neo'}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

updatePlaylist(playlist, 'Davido', 'I love You')

function removeFromPlaylist(playlist, artistName) {
  playlist[artistName].pop()
  
  return playlist
}

removeFromPlaylist