import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import MyInfo from './components/myInfo';

function App() {
  return (
    <div className="App">
      <MyInfo/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
