import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import MainPanel from './components/MainPanel';
import ConnectionWarning from './components/ConnectionWarning';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/indigo';
import secondary from '@material-ui/core/colors/amber';
import snackbar from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    typography: {
      useNextVariants: true,
    },
    type: 'dark',
    primary: primary,
    secondary: secondary,
    snackbar: snackbar,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <MuiThemeProvider theme={theme}>
            <Navigation/>
            <MainPanel/>
            <ConnectionWarning/>
          </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  app: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
