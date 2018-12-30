import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import GridButton from '../buttons/GridButton';

@inject('RatatoskrStore')
@observer
class MenuPanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const connected = this.props.RatatoskrStore.connected;
        const settingsColor = connected ? 'inherit' : 'primary';

        return (
            <div className={classes.container}>
                <Grid container spacing={24}>
                    <GridButton
                        disabled={!connected}
                        icon='group_work'
                        size={3}>
                        Core Systems
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='memory'
                        size={3}>
                        I.F.C.S.
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
                        Combat
                    </GridButton>
                    <GridButton
                        disabled={!connected}
                        icon='explore'
                        size={3}>
                        Navigation
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
                        color={settingsColor}
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
        padding: 80,
        color: theme.palette.text.primary,
    },
    header: {

    },
    grid: {

    },
    item: {
        textAlign: 'center',
        align: 'center',
    }
});

MenuPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuPanel);