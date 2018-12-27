import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import ConnectionSettings from './settings/ConnectionSettings';
import ThemeSettings from './settings/ThemeSettings';

@inject('RatatoskrStore')
@observer
class Settings extends Component {
    state = {
    };

    render () {
        const { classes } = this.props;
        const show = this.props.RatatoskrStore.tab === 'settings';

        return (
            ( show &&
                <div className={classes.settings}>
                    <ConnectionSettings/>
                    <ThemeSettings/>
                </div>
            )
        )
    }
}

const styles = theme => ({
    settings : {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // horizontal center
        justifyContent: 'center', // vertical center
    },
});

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);