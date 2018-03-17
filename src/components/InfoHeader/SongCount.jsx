import React from 'react';
import { Header } from 'semantic-ui-react';

const SongCount = (props) => {
  return (
    <Header as='h3' inverted>
      {props.songCount > 0 && `${props.songCount} TOTAL PLAY(S)`}
    </Header>
  );
}

export default SongCount;
