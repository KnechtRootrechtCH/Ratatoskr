import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {inject, observer} from 'mobx-react';

import Navigation from './components/Navigation';
import PanelContainer from './components/PanelContainer';
import ConnectionWarning from './components/ConnectionWarning';

import { MuiThemeProvider } from '@material-ui/core/styles';

@inject('ThemeStore')
@observer
class App extends Component {
  render() {
    const { classes } = this.props;
    const materialTheme = this.props.ThemeStore.theme;
    console.debug('App.render() :', materialTheme, classes);

    return (
      <div className={classes.app}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <MuiThemeProvider theme={materialTheme}>
            <Navigation/>
            <PanelContainer/>
            <ConnectionWarning/>
          </MuiThemeProvider>
      </div>
    );
  }
}

const styles = theme => ({
  app: {
  },
});

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
