import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Events from './components/Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Events />
      </div>
    );
  }
}

export default App;
