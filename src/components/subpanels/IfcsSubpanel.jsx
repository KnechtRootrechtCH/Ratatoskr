import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import {Fab, Grid, Button, Icon, IconButton, Typography, withTheme} from '@material-ui/core';

import DoorOpenIcon from 'mdi-material-ui/DoorOpen'
import DoorClosedIcon from 'mdi-material-ui/Door'
import LockOpenIcon from 'mdi-material-ui/LockOpen'
import LockClosedIcon from 'mdi-material-ui/Lock'

@inject('ThemeStore')
@observer
class IfcsSubpanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const controlsColor = this.props.ThemeStore.controlsColor;
        classNames()

        return (
            <Grid className={classes.container} container spacing={16}>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Cycle Safeties</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>E.S.P.</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>De/Couple</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Gimbal Lock</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Mouse Move Mode</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Mouse Aim Mode</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Reticle Mode</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Target Focus</Button>
                    </Grid>
                    <Grid className={classes.item} item xs={4}>

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

IfcsSubpanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IfcsSubpanel);