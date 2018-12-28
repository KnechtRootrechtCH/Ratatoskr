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
class ThemeSettings extends Component {
    state = {
    };

    componentDidMount() {
    }

    handleColorSelection = (type, color) => {
        if (type === 'primary') {
            this.props.ThemeStore.setPrimary(color);
        } else if (type === 'secondary') {
            this.props.ThemeStore.setSecondary(color);
        } else {
            console.warn('ThemeSettings.handleColorSelection() : Unknown type! =>', type);
            return;
        }
        this.props.ThemeStore.applyTheme();
    }

    handleTypeSwitch = () => {
        if (this.props.ThemeStore.type === 'dark') {
            this.props.ThemeStore.setType('light');
        } else {
            this.props.ThemeStore.setType('dark');
        }
        this.props.ThemeStore.applyTheme();
    }

    handleNavbarSwitch = () => {
        const enabled = this.props.ThemeStore.themedNavbar;
        this.props.ThemeStore.setThemedNavbar(!enabled);
    }

    render () {
        const { classes } = this.props;
        const darkTheme = this.props.ThemeStore.type === 'dark';
        const themedNavbar = this.props.ThemeStore.themedNavbar;

        return (
            <div className={classes.settings}>
                <Grid container className={classes.palette} spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.header} variant="subtitle1" color="primary">Theme settings</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            className={classes.switch}
                            labelPlacement="end"
                            control={
                                <Switch
                                checked={darkTheme}
                                onChange={this.handleTypeSwitch}
                                color="primary"/>
                            }
                            label={
                                <Typography variant="caption">Dark mode</Typography>
                            }/>
                    </Grid>
                    <Grid item xs={12}>
                            <FormControlLabel
                                className={classes.switch}
                                labelPlacement="end"
                                control={
                                    <Switch
                                    checked={themedNavbar}
                                    onChange={this.handleNavbarSwitch}
                                    color="primary"/>
                                }
                                label={
                                    <Typography variant="caption">Colored navigation bar</Typography>
                                }/>
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={6}>
                        <Typography className={classes.header} variant="caption">Primary color</Typography>
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={6}>
                        <Typography className={classes.header} variant="caption">Secondary color</Typography>
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={6} spacing={0}>
                        {this.renderColorGrid('primary')}
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={6} spacing={0}>
                        {this.renderColorGrid('secondary')}
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderColorGrid(type) {
        const { classes } = this.props;
        let colors = this.props.ThemeStore.colors;

        if(!colors || colors.length === 0) {
            return (<div></div>);
        }

        /*
        colors.forEach((color) => {
            color.key = color['500']
        });
        console.debug('ThemeSettings.renderColorGrid() : ', type, colors);
        */

        return (
            <Grid className={classes.paletteGrid} container item xs={12}>
            {colors.map(color => {
                return this.renderColorItem(type, color)
            })}
            </Grid>
        );
    }

    renderColorItem (type, color) {
        const { classes } = this.props;

        const style = {
            background: color['500'],
        };

        const current = type === 'primary' ?
            this.props.ThemeStore.primary :
            this.props.ThemeStore.secondary;
        const selected = current['500'] === color['500'];

        return (
            <Grid
                className={ classes.paletteItem + (selected ? " selected" : "")}
                onClick={(e) => this.handleColorSelection(type, color)}
                item
                xs={3}
                style={style}>
            </Grid>
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
        height: 140,
    },
    paletteColumn: {
    },
    paletteItem: {
        cursor: 'pointer',
        width: 38,
        height: 38,
        '&.selected': {
            border: '2px solid',
            borderColor: theme.palette.text.primary,
        },
    },
    switch: {
        margin: '0 0 0 -14px',
    },
});

ThemeSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeSettings);