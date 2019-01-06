import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class FlightSystemsPanel extends Component {
    state = {};

    // spacints: 0,8,16,24,22,40

    render () {
        const { classes } = this.props;
        const controlsColor = this.props.ThemeStore.controlsColor;

        return (
            <div className={classes.container}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>I.F.C.S.</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Cycle Safeties</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>E.S.P.</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>De/Couple</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Gimbal Lock</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Mouse Move Mode</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Mouse Aim Mode</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Reticle Mode</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant='outlined' color={controlsColor}>Target Focus</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>bbasfag</Paper>
                    </Grid>
                </Grid>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        // horizontal center
        textAlign: 'center',
        // styling
        padding: 10,
        color: theme.palette.text.primary,
    },
    paper: {
        padding: 10,
    },
    button: {
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
});

FlightSystemsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlightSystemsPanel);