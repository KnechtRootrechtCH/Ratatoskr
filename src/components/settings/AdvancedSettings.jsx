import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

@inject('ThemeStore')
@observer
class AdvancedSettings extends Component {

    handleModeSwitch = () => {
        const value = !this.props.ThemeStore.advancedMode;
        this.props.ThemeStore.setAdvancedMode(value);
    }

    render () {
        const { classes } = this.props;

        const mode = this.props.ThemeStore.advancedMode;
        let controlsColor = this.props.ThemeStore.controlsColor;
        controlsColor = controlsColor === 'inherit' ? 'default' : controlsColor;

        return (
            <div className={classes.settings}>
                <Grid container className={classes.palette} spacing={8}>
                    <Grid container item xs={12}>
                        <Typography className={classes.header} variant="subtitle1" color="primary">Advanced Settings</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            className={classes.switch}
                            labelPlacement="end"
                            control={
                                <Switch
                                checked={mode}
                                onChange={this.handleModeSwitch}
                                color={controlsColor}/>
                            }
                            label={
                                <Typography variant="caption">Advanced mode</Typography>
                            }/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = theme => ({
    settings: {
        width: 320,
        marginBottom: 10,
    },
    palette: {

    },
    paletteGrid: {
        width: 140,
    },
    switch: {
        margin: '0 0 0 -14px',
    },
});

AdvancedSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedSettings);