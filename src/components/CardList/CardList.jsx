import React from 'react';
import { Card } from 'semantic-ui-react';

import SongCard from './SongCard';

const CardList = (props) => {
  return (
    <Card.Group itemsPerRow={4}>
      {
        props.songs.map((song, index) => (
          <SongCard
            key={index}
            name={song.name}
            artist={song.artist}
            image={song.image}
            playing={song.playing}
            updateCurrentSong={props.updateCurrentSong}
            updateSongCount={props.updateSongCount}
            updateSongState={props.updateSongState}
          />
        ))
      }
    </Card.Group>
  );
}

export default CardList;
