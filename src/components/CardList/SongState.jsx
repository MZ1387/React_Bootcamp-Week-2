import React from 'react';
import { Button } from 'semantic-ui-react';

const SongState = (props) => {
  return (
    <Button
      fluid
      icon={props.playing ? "stop" : "play"}
      color={props.playing ? "red" : "green"}
      onClick={() => {
        props.updateCurrentSong(props.song)
        props.updateSongCount()
        props.updateSongState(props.song)
      }}
    />
  );
}

export default SongState;
