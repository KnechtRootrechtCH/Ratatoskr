import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader'
import { withStyles } from '@material-ui/core/styles';
import {inject, observer} from 'mobx-react';
import MetaTags from 'react-meta-tags';
import { BrowserRouter, Route} from 'react-router-dom'

import ConnectionWarning from './components/ConnectionWarning';
import PanelContainer from './components/PanelContainer';
import Navigation from './components/Navigation';

import { MuiThemeProvider } from '@material-ui/core/styles';

@inject('ThemeStore')
@observer
class App extends Component {
  componentDidMount() {
  }

  render() {
    const { classes } = this.props;
    const theme = this.props.ThemeStore.theme;
    const themedNavbar = this.props.ThemeStore.themedNavbar;
    const navbarColor = themedNavbar ? theme.palette.primary['500'] : theme.palette.grey['900'];

    return (
      <BrowserRouter>
        <div className={classes.app}>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'></link>
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'></link>
          <MetaTags>
            <meta name='theme-color' content={navbarColor} />
            <meta name='msapplication-navbutton-color' content={navbarColor}/>
            <meta name='apple-mobile-web-app-status-bar-style' content={navbarColor}/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
          </MetaTags>
          <MuiThemeProvider theme={theme}>
            <Navigation/>
            <Route render={({location}) => (
              <PanelContainer location={location}/>
            )}/>
            <ConnectionWarning/>
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
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

export default withStyles(styles)(hot(module)(App));
