import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardList/CardList';

class ParentComponent extends Component {
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

  updateCurrentSong = (song) => {
    if (song !== this.state.currentSong) {
      this.setState(() => ({
        currentSong: song
      }));
    } else {
      this.setState(() => ({
        currentSong: null
      }));
    }
  }

  updateSongCount = () => {
    if (this.state.currentSong === null) {
      this.setState((prevState) => ({
        songCount: prevState.songCount + 1
      }));
    }
  }

  updateSongState = (songClicked) => {
    this.setState((prevState) => ({
      songs: prevState.songs.map((song) => {
          if (songClicked === song.name) {
            return {
              ...song,
              playing: !song.playing
            };
          } else {
            return song;
          }
        })
    }));
  }

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
            updateCurrentSong={this.updateCurrentSong}
            updateSongCount={this.updateSongCount}
            updateSongState={this.updateSongState}
          />
        </Container>
      </div>
    );
  }
};

export default ParentComponent;
