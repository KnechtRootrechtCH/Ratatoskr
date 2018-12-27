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
                <Typography className={classes.header} variant="overline" color="primary">Theme settings</Typography>
                <Grid container className={classes.paletteColumn} item xs={12} spacing={0}>
                    <FormControlLabel
                        className={classes.switch}
                        labelPlacement="start"
                        control={
                            <Switch
                            checked={darkTheme}
                            onChange={this.handleTypeSwitch}
                            color="primary"/>
                        }
                        label={
                            <Typography className={classes.header} variant="overline">Dark mode</Typography>
                        }/>
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={12} spacing={0}>
                    <FormControlLabel
                        className={classes.switch}
                        labelPlacement="start"
                        control={
                            <Switch
                            checked={themedNavbar}
                            onChange={this.handleNavbarSwitch}
                            color="primary"/>
                        }
                        label={
                            <Typography className={classes.header} variant="overline">Color navbar</Typography>
                        }/>
                    </Grid>
                <Grid container className={classes.palette} spacing={16}>
                    <Grid container className={classes.paletteColumn} item xs={6} spacing={0}>
                        <Typography className={classes.header} variant="overline">Primary color</Typography>
                        {this.renderColorGrid('primary')}
                    </Grid>
                    <Grid container className={classes.paletteColumn} item xs={6} spacing={0}>
                        <Typography className={classes.header} variant="overline">Secondary color</Typography>
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
                className={ selected ? classes.paletteItemSelected : classes.paletteItem}
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
        marginBottom: 20,
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
    },
    paletteItemSelected: {
        border: '2px solid',
        borderColor: theme.palette.text.primary,
    },
    switch: {
        margin: 0,
    },
});

ThemeSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeSettings);