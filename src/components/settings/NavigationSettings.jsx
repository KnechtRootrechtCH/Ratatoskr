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
class NavigationSettings extends Component {
    state = {
        position: 'top',
        color: 'default',
    };

    componentDidMount() {
        this.setState({
            position: this.props.ThemeStore.navbarPosition,
            color: this.props.ThemeStore.navbarColor,
        })
    }

    handleNavbarPositionChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ position: value });
        this.props.ThemeStore.setNavbarPosition(value);
    };

    handleNavbarColorChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ color: value });
        this.props.ThemeStore.setNavbarColor(value);
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.settings}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.header} variant='subtitle1' color='primary'>Navbar Position</Typography>
                    </Grid>
                    <Grid>
                        <RadioGroup
                            className={classes.radioGroup}
                            value={this.state.position}
                            onChange={this.handleNavbarPositionChange}>
                            <FormControlLabel value='top' control={<Radio color='primary'/>} label='Top' />
                            <FormControlLabel value='bottom' control={<Radio color='primary'/>} label='Bottom' />
                            <FormControlLabel value='none' control={<Radio color='primary'/>} label='Disabled' />
                        </RadioGroup>
                    </Grid>

                    <Grid item xs={12}>
                    <   Typography className={classes.header} variant='subtitle1' color='primary'>Navbar Color</Typography>
                    </Grid>
                    <Grid>
                        <RadioGroup
                            className={classes.radioGroup}
                            value={this.state.color}
                            onChange={this.handleNavbarColorChange}>
                            <FormControlLabel value='default' control={<Radio color='primary'/>} label='Default' />
                            <FormControlLabel value='primary' control={<Radio color='primary'/>} label='Primary' />
                            <FormControlLabel value='secondary' control={<Radio color='primary'/>} label='Secondary' />
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

NavigationSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationSettings);