import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

import SettingsIcon from '@material-ui/icons/Settings'

@inject('RatatoskrStore')
@observer
class SettingsFab extends Component {
    state = {
    };

    handleClick = () => {
        this.props.RatatoskrStore.setTab('settings');
    }

    render () {
        const { classes } = this.props;
        const connected = this.props.RatatoskrStore.connected;
        const tab = this.props.RatatoskrStore.tab;
        const show = connected && tab !== 'settings';

        return (
            ( show &&
                <SettingsIcon className={classes.settingsIcon} onClick={this.handleClick}/>
            )
        )
    }
}

const styles = theme => ({
    settingsIcon : {
        margin: theme.spacing.unit,
        color: theme.palette.primary.main,
        position: 'absolute',
        zIndex: 3,
        right: 15,
        bottom: 15,
        cursor: 'pointer',
    },
    extendedIcon : {
        marginRight: theme.spacing.unit,
    }
});

SettingsFab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsFab);