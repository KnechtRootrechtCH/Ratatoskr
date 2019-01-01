import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import NavbarButton from './buttons/NavbarButton'

import {
    Toolbar } from '@material-ui/core';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class NavigationToolbar extends Component {
    render () {
        const classes = this.props.classes;

        return (
            <Toolbar>
                <NavbarButton
                    icon='home'
                    route='/'
                    variant='text'>Menu</NavbarButton>
                <div className={classes.grow}>
                </div>
                <NavbarButton
                    command='Starmap'
                    icon='map'
                    variant='text'>Starmap</NavbarButton>
                <NavbarButton
                    command='MobiGlas'
                    icon='dvr'
                    variant='text'>Mobiglass</NavbarButton>
            </Toolbar>
        );
     }
}

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

NavigationToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationToolbar);