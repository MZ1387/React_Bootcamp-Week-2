import React from 'react';
import { Header } from 'semantic-ui-react';

const CurrentSong = (props) => {
  return (
    <Header as='h3' inverted>
      {props.currentSong ? `NOW PLAYING: ${props.currentSong}` : 'SELECT A SONG'}
    </Header>
  );
}

export default CurrentSong;
