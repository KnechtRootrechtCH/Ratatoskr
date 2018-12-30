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

    handleNavbarHide = () => {
        const value = this.props.ThemeStore.hideNavbar;
        this.props.ThemeStore.setHideNavbar(!value);
    }

    handleNavbarPosition = () => {
        const value = this.props.ThemeStore.bottomNavbar;
        this.props.ThemeStore.setBottomNavbar(!value);
    }

    handleNavbarColor = () => {
        const value = this.props.ThemeStore.themedNavbar;
        this.props.ThemeStore.setThemedNavbar(!value);
    }

    render () {
        const { classes } = this.props;
        const darkTheme = this.props.ThemeStore.type === 'dark';
        const hideNavbar = this.props.ThemeStore.hideNavbar;
        const bottomdNavbar = this.props.ThemeStore.bottomNavbar;
        const themedNavbar = this.props.ThemeStore.themedNavbar;

        return (
            <div className={classes.settings}>
                <Grid container className={classes.palette} spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.header} variant="subtitle1" color="primary">Theme settings</Typography>
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
                                    checked={hideNavbar}
                                    onChange={this.handleNavbarHide}
                                    color="primary"/>
                                }
                                label={
                                    <Typography variant="caption">Hide navigation bar</Typography>
                                }/>
                    </Grid>
                    <Grid item xs={12}>
                            <FormControlLabel
                                className={classes.switch}
                                labelPlacement="end"
                                disabled={hideNavbar}
                                control={
                                    <Switch
                                    checked={bottomdNavbar}
                                    onChange={this.handleNavbarPosition}
                                    color="primary"/>
                                }
                                label={
                                    <Typography variant="caption">Bottom navigation bar</Typography>
                                }/>
                    </Grid>
                    <Grid item xs={12}>
                            <FormControlLabel
                                className={classes.switch}
                                labelPlacement="end"
                                disabled={hideNavbar}
                                control={
                                    <Switch
                                    checked={themedNavbar}
                                    onChange={this.handleNavbarColor}
                                    color="primary"/>
                                }
                                label={
                                    <Typography variant="caption" >Colored navigation bar</Typography>
                                }/>
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

        return (
            <Grid className={classes.paletteGrid} container item xs={12}>
            {colors.map((color, index) => {
                return this.renderColorItem(type, color, index)
            })}
            </Grid>
        );
    }

    renderColorItem (type, color, index) {
        const { classes } = this.props;

        const style = {
            background: color['500'],
        };

        const current = type === 'primary' ?
            this.props.ThemeStore.primary :
            this.props.ThemeStore.secondary;
        const selected = current['500'] === color['500'];
        const key = type + index;

        return (
            <Grid
                key={key}
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