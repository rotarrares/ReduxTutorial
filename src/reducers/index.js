import {combineReducers} from 'redux';

//Reducers
// Instantiating Reducer ( only creates initial data)
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '3:31' },
    { title: 'All Star', duration: '2:22' },
    { title: 'I Want It That Way', duration: '1:45' },

  ]
}

//Song selecting reducer ( selects a song from the list )
const selectedSongReducer = (selectedSong = null,action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return (selectedSong);
}

export default combineReducers({
  songs:songsReducer,
  selectedSong: selectedSongReducer
})
