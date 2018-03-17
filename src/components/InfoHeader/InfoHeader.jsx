import React from 'react';
import { Menu } from 'semantic-ui-react';

import CurrentSong from './CurrentSong';
import SongCount from './SongCount';

const InfoHeader = (props) => {
  return (
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>
        <CurrentSong
          currentSong={props.currentSong}
        />
      </Menu.Item>
      <Menu.Item position='right'>
        <SongCount
          songCount={props.songCount}
        />
      </Menu.Item>
    </Menu>
  );
}

export default InfoHeader;
