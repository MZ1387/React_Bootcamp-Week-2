import React, { Component } from 'react';
import { Menu, Button, Container, Card, Header } from 'semantic-ui-react';

class Static extends Component {
  state = {
    currentSong: null,
    songCount: 0,
    songs: [
      {
        name: '8 Days A Week',
        artist: 'The Beatles',
        image: 'https://img.discogs.com/kgol9xOtaHWjHJ_mZeTMLdyhZrU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-651505-1455530433-5492.jpeg.jpg',
        playing: false
      },
      {
        name: 'In Da Club',
        artist: '50 Cent',
        image: 'https://img.discogs.com/0IODnWrVY7i061-IFJx86-5m11A=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-258882-1425707940-8805.jpeg.jpg',
        playing: false
      },
      {
        name: 'Miss Your Touch',
        artist: 'Cassie',
        image: 'https://img.discogs.com/CyS45cwkv6y1afbV-2XkaMfcR_I=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6067175-1475529710-5604.jpeg.jpg',
        playing: false
      },
      {
        name: 'Volare',
        artist: 'Dean Martin',
        image: 'https://images.eil.com/large_image/DEAN_MARTIN_COLLECTORS%2BEDITION%2B-%2BSEALED-485667.jpg',
        playing: false
      },
    ]
  };

  render() {
    const { currentSong, songCount, songs } = this.state;
    return (
      <div>
        <InfoHeader
          currentSong={currentSong}
          songCount={songCount}
        />
        <Container>
          <CardList
            songs={songs}
          />
        </Container>
      </div>
    );
  }
}

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

const CurrentSong = (props) => {
  return (
    <Header as='h3' inverted>
      {props.currentSong ? `NOW PLAYING: ${props.currentSong}` : 'SELECT A SONG'}
    </Header>
  );
}

const SongCount = (props) => {
  return (
    <Header as='h3' inverted>
      {props.songCount > 0 && `${props.songCount} TOTAL PLAYS`}
    </Header>
  );
}

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
          />
        ))
      }
    </Card.Group>
  );
}

const SongCard = (props) => {
  return (
    <Card
      image={props.image}
      header={props.name}
      meta={props.artist}
      extra={
        <SongState
          playing={props.playing}
        />
      }
    />
  );
}

const SongState = (props) => {
  return (
    <Button
      fluid
      icon={props.playing ? "stop" : "play"}
      color={props.playing ? "red" : "green"}
    />
  );
}

export default Static;
