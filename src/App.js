import React, { Component } from 'react';
import './App.css';

import MainPanel from './components/MainPanel';
import TitleBar from './components/TitleBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/indigo';
import secondary from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: primary,
    secondary: secondary,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <MuiThemeProvider theme={theme}>
          <TitleBar/>
          <MainPanel/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
