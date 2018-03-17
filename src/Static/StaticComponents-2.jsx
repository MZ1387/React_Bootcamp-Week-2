import React from 'react';
import { Menu, Button, Container, Card, Header } from 'semantic-ui-react';

const Static = (props) => {
  return (
    <div>
      <InfoHeader />
      <Container>
        <CardList />
      </Container>
    </div>
  );
}

const InfoHeader = () => {
  return (
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>
        <Header as='h3' inverted>
          NOW PLAYING: Song Name
        </Header>
      </Menu.Item>
      <Menu.Item position='right'>
        <Header as='h3' inverted>
          2,000 TOTAL PLAYS
        </Header>
      </Menu.Item>
    </Menu>
  );
}

const CardList = () => {
  return (
    <Card.Group itemsPerRow={4}>

      <Card
        image='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/80/d5/bd/80d5bde3-d604-4383-5014-d8c279008ca3/AppIcon-1x_U007emarketing-85-220-0-5.png/1200x630bb.jpg'
        header='Song Name'
        meta='Artist Name'
        extra={<Button fluid icon="stop" color='red'/>}
      />

      <Card
        image='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/80/d5/bd/80d5bde3-d604-4383-5014-d8c279008ca3/AppIcon-1x_U007emarketing-85-220-0-5.png/1200x630bb.jpg'
        header='Song Name'
        meta='Artist Name'
        extra={<Button fluid icon="stop" color='red'/>}
      />

      <Card
        image='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/80/d5/bd/80d5bde3-d604-4383-5014-d8c279008ca3/AppIcon-1x_U007emarketing-85-220-0-5.png/1200x630bb.jpg'
        header='Song Name'
        meta='Artist Name'
        extra={<Button fluid icon="play" color='green'/>}
      />

      <Card
        image='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/80/d5/bd/80d5bde3-d604-4383-5014-d8c279008ca3/AppIcon-1x_U007emarketing-85-220-0-5.png/1200x630bb.jpg'
        header='Song Name'
        meta='Artist Name'
        extra={<Button fluid icon="stop" color='red'/>}
      />

    </Card.Group>
  );
}

export default Static;
