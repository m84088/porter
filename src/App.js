import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Self Me and stuff</h1>
        </header>
        <p className="App-intro">
          Things about me:
        </p>
        <p>
          1. I like to go shooting, outside rather than inside. <br/>
          <br/>
          2. PUBS The worst game in the world....but i play it all the time <br/>
         <br/>
          3. taking this class makes me nuts....er but i like it.
        </p>
      </div>
    );
  }
}

export default App;
