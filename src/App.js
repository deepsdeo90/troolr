import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProfilesInfo from './containers/ProfilesInfo/ProfilesInfo';
import Auxi from './HOC/Auxi';

class App extends Component {
  render() {
    return (
      <Auxi>
        <Header></Header>
        <ProfilesInfo></ProfilesInfo>
      </Auxi>
    );
  }
}

export default App;
