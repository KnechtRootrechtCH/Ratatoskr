import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import GridButton from '../buttons/GridButton';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class MenuPanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const connected = this.props.RatatoskrStore.connected;

        return (
            <div className={classes.container}>
                <Grid container spacing={16}>
                    <GridButton
                        disabled={!connected}
                        icon='group_work'
                        size={3}>
                        Basic Controls
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='memory'
                        size={3}>
                        Flight Systems
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='battery_charging_full'
                        size={3}>
                        Power Management
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='security'
                        size={3}>
                        Shield Management
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='gps_fixed'
                        size={3}>
                        Targeting Systems
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='wifi_tethering'
                        size={3}>
                        Industrial
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='headset'
                        size={3}>
                        Communications
                    </GridButton>
                    <GridButton
                        icon='settings'
                        route='/settings'
                        highlight={!connected}
                        size={3}>
                        Settings
                    </GridButton>
                </Grid>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        textAlign: 'center',
        padding: 0,
        color: theme.palette.text.primary,
    },
    grid: {
    },
});

MenuPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuPanel);