import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

import { withStyles } from '@material-ui/core/styles';

class MainPanel extends Component {
    state = {};


    render () {
        // const { classes } = this.props;
        return (
            <main>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
            </main>
        );
     }
}

const styles = {

};

MainPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPanel);