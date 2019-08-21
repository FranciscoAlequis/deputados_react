import React, { Component } from 'react';
import './App.css';
import Deputados from './components/Deputados';

class App extends Component{
  render() {
    return(
      <div className="App">
        <Deputados />
      </div>
    );
  }
}

export default App;
