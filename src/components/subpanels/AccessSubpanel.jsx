import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import {Fab, Grid, Typography} from '@material-ui/core';

import DoorOpenIcon from 'mdi-material-ui/DoorOpen'
import DoorClosedIcon from 'mdi-material-ui/Door'
import LockOpenIcon from 'mdi-material-ui/LockOpen'
import LockClosedIcon from 'mdi-material-ui/Lock'

@inject('ThemeStore')
@observer
class AccessSubpanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const controlsColor = this.props.ThemeStore.controlsColor;
        classNames()

        return (
            <Grid className={classes.container} container spacing={16}>
                <Grid item className={classes.item} xs={6}>
                    <Fab className={classes.fab} color={controlsColor}><DoorOpenIcon fontSize='large'/></Fab>
                </Grid>
                <Grid item className={classes.item} xs={6}>
                    <Fab className={classes.fab} color={controlsColor}><LockOpenIcon fontSize='large'/></Fab>
                </Grid>

                <Grid item className={classes.item} xs={6}>
                    <Typography variant='subtitle1'>Hatches</Typography>
                </Grid>
                <Grid item className={classes.item} xs={6}>
                    <Typography variant='subtitle1'>Locks</Typography>
                </Grid>

                <Grid item className={classes.item} xs={6}>
                    <Fab className={classes.fab} color={controlsColor}><DoorClosedIcon fontSize='large'/></Fab>
                </Grid>
                <Grid item className={classes.item} xs={6}>
                    <Fab className={classes.fab} color={controlsColor}><LockClosedIcon fontSize='large'/></Fab>
                </Grid>
            </Grid>
        );
     }
}

const styles = theme => ({
    container: {

    },
    item: {
        textAlign: 'center',
    },
    fab: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    button: {
        width: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
});

AccessSubpanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccessSubpanel);