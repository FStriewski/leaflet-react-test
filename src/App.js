import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Leaflet Test App </h1>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
