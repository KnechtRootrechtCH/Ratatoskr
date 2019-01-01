import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

@inject('ThemeStore')
@observer
class ControlsSettings extends Component {
    state = {
        color: 'inherit',
    };

    componentDidMount() {
        this.setState({
            color: this.props.ThemeStore.controlsColor,
        })
    }

    handleControlsColorChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ color: value });
        this.props.ThemeStore.setControlsColor(value);
    };

    render () {
        const { classes } = this.props;

        let controlsColor = this.props.ThemeStore.controlsColor;
        controlsColor = controlsColor === 'inherit' ? 'default' : controlsColor;

        return (
            <div className={classes.settings}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                    <   Typography className={classes.header} variant='subtitle1' color='primary'>Controls Color</Typography>
                    </Grid>
                    <Grid>
                        <RadioGroup
                            className={classes.radioGroup}
                            value={this.state.color}
                            onChange={this.handleControlsColorChange}>
                            <FormControlLabel value='inherit' control={<Radio color={controlsColor}/>} label='Default' />
                            <FormControlLabel value='primary' control={<Radio color={controlsColor}/>} label='Primary' />
                            <FormControlLabel value='secondary' control={<Radio color={controlsColor}/>} label='Secondary' />
                        </RadioGroup>
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
    header: {
    },
    radioGroup: {
        margin: '0 0 0 4px',
    },
});

ControlsSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlsSettings);