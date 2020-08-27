import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
  if(props.song){
    return(
      <div>
        <h3>Details for:</h3>
        <p>Title: {props.song.title}</p>
        <p>Duration: {props.song.duration}</p>

      </div>);
  }
  return(
    <div>Select a song</div>
  )
}

const mapStateToProps = (state) => {
  return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);
