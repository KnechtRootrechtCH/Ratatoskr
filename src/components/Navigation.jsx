import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import NavigationDrawer from './NavigationDrawer'
import NavigationTabs from './NavigationTabs'
import NavigationToolbar from './NavigationToolbar'

import { AppBar } from '@material-ui/core';


@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class Navigation extends Component {

    render () {
        const classes = this.props.classes;

        const navigationMode = this.props.ThemeStore.navigationMode;
        const showAppBar  = navigationMode !== 'drawer';
        const tabs = navigationMode === 'tabs';

        const navbarColor = this.props.ThemeStore.navbarColor;

        const bottomNavbar = this.props.ThemeStore.navbarPosition === 'bottom';
        const barClass = bottomNavbar ? classes.barBottom : classes.barTop;

        return (
            ( showAppBar ? (
            <AppBar className={barClass} position='fixed' color={navbarColor}>
                {tabs ?
                (
                <NavigationTabs/>
                ):(
                <NavigationToolbar/>
                )}
            </AppBar>
            ) : (
            <NavigationDrawer/>
            ))
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
});

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);