import React from 'react';
import { Card } from 'semantic-ui-react';

import SongState from './SongState';

const SongCard = (props) => {
  return (
    <Card
      image={props.image}
      header={props.name}
      meta={props.artist}
      extra={
        <SongState
          playing={props.playing}
          song={props.name}
          updateCurrentSong={props.updateCurrentSong}
          updateSongCount={props.updateSongCount}
          updateSongState={props.updateSongState}
        />
      }
    />
  );
}

export default SongCard;
