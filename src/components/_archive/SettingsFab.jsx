import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import ExitIcon from '@material-ui/icons/CheckCircle'
import SettingsIcon from '@material-ui/icons/Settings'

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class SettingsFab extends Component {
    state = {
    };

    handleSettingsClick = () => {
        this.props.RatatoskrStore.setTab('settings');
    }

    handleSaveClick = () => {
        this.props.RatatoskrStore.setTab('core');
    }

    render () {
        const { classes } = this.props;
        const connected = this.props.RatatoskrStore.connected;
        const tab = this.props.RatatoskrStore.tab;
        const settingsActive = connected && tab === 'settings';
        const positionTop = this.props.ThemeStore.bottomNavbar;
        const noNavbar = this.props.ThemeStore.hideNavbar;
        const iconClasses = positionTop || noNavbar ? classes.iconTop : classes.iconBottom;

        return (
            (settingsActive ? (
                <ExitIcon className={iconClasses} onClick={this.handleSaveClick} color='primary'/>
            ):(
                <SettingsIcon className={iconClasses} onClick={this.handleSettingsClick} color='primary'/>
            ))
        )
    }
}

const styles = theme => ({
    iconTop : {
        margin: theme.spacing.unit,
        color: theme.palette.primary.main,
        position: 'fixed',
        zIndex: 3,
        right: 5,
        top: 5,
        width: 30,
        height: 30,
        cursor: 'pointer',
    },
    iconBottom : {
        margin: theme.spacing.unit,
        color: theme.palette.primary.main,
        position: 'fixed',
        zIndex: 3,
        right: 5,
        bottom: 5,
        width: 30,
        height: 30,
        cursor: 'pointer',
    },
});

SettingsFab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsFab);