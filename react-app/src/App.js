import React, { Component } from 'react';
import './App.css';
import RockChart from './components/RockChart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <RockChart />
      </div>
    );
  }
}

export default App;
