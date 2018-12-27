import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {inject, observer} from 'mobx-react';

import ConnectionWarning from './components/ConnectionWarning';
import MfdPanelContainer from './components/MfdPanelContainer';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import SettingsFab from './components/SettingsFab';

import { MuiThemeProvider } from '@material-ui/core/styles';

@inject('ThemeStore')
@observer
class App extends Component {
  render() {
    const { classes } = this.props;
    const theme = this.props.ThemeStore.theme;

    return (
      <div className={classes.app}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <MuiThemeProvider theme={theme}>
            <Navigation/>
            <MfdPanelContainer/>
            <Settings/>
            <SettingsFab/>
            <ConnectionWarning/>
          </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  app: {
  },
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
