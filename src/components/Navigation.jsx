import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import NavbarButton from './buttons/NavbarButton'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class Navigation extends Component {

    handleChange = (event, value) => {
        event.preventDefault();
        this.props.RatatoskrStore.setTab(value);
    };

    render () {
        const classes = this.props.classes;

        let tab = this.props.RatatoskrStore.tab;
        if (tab === 'settings') {
            tab = false;
        }

        const navbarColor = this.props.ThemeStore.navbarColor;
        const bottomNavbar = this.props.ThemeStore.navbarPosition === 'bottom';
        const barClass = bottomNavbar ? classes.barBottom : classes.barTop;
        const show  = this.props.ThemeStore.navbarPosition !== 'none';

        return (
            ( show &&
            <AppBar className={barClass} position="fixed" color={navbarColor}>
                <Toolbar>
                    <NavbarButton
                        icon='home'
                        route='/'
                        variant='text'>Menu</NavbarButton>
                    <div className={classes.grow}>
                    </div>
                    <NavbarButton
                        command='Power'
                        icon='power_settings_new'
                        variant='text'>Power</NavbarButton>
                    <NavbarButton
                        command='Power_Engines'
                        icon='blur_circular'
                        variant='text'>Engines</NavbarButton>
                    <NavbarButton
                        command='MobiGlas'
                        icon='dvr'
                        variant='text'>Mobiglass</NavbarButton>
                </Toolbar>
            </AppBar>
            )
        );
     }
}

const styles = theme => ({
    barTop: {
        flexGrow: 1,
        width: '100%',
    },
    barBottom: {
        flexGrow: 1,
        width: '100%',
        top: 'auto',
        bottom: 0,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
});

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);