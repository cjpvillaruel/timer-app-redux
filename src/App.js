import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import store from './store';
import ButtonGroup from './components/ButtonGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Timer {...store.getState()} />
      <ButtonGroup />
      </div>
    );
  }
}

export default App;
