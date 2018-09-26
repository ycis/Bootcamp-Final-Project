import React, { Component } from 'react';
import Dashboard from './components/AppDrawer'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './routes'


class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard>
          <Routes />
        </Dashboard>
      </Router>
    );
  }
}

export default App;
