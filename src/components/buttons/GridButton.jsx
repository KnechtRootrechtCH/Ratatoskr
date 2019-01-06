import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import SubpanelDialog from '../SubpanelDialog';

import PanelService from '../../service/PanelService';
import SubpanelService from '../../service/SubpanelService';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class GridButton extends Component {
    iconSizes = {
        'xs': 12,
        'sm': 18,
        'md': 24,
        'lg': 24,
        'xl': 32,
    }

    buttonSizes = {
        'xs': 8,
        'sm': 16,
        'md': 18,
        'lg': 24,
        'xl': 30,
    }

    constructor (props) {
        super(props);
        this.state = {
            dialogOpen: false,
        };
    }

    handleClick = () => {
        if (this.props.command) {
            this.props.RatatoskrStore.executeCommand(this.props.command);
        }
        if (this.props.subpanel || this.props.subpanelKey) {
            this.setState({ dialogOpen: true });
        }
    }

    handleDialogClose = (reason) => {
        // console.debug('GridButton:handleDialogClose() :', reason)
        if (this.state.dialogOpen) {
            this.setState({ dialogOpen: false });
        }
    }

    render () {
        const { classes } = this.props;

        const disabled = this.props.disabled;
        const size = this.props.size ? this.props.size : 3;
        const buttonSize = this.buttonSizes[this.props.width] * size;

        let panel = this.props.panel;
        if (!panel) {
            const panelKey = this.props.panelKey;
            panel = PanelService.get(panelKey);
        }

        let subpanel = this.props.subpanel;
        if (!subpanel) {
            const subpanelKey = this.props.subpanelKey;
            subpanel = SubpanelService.get(subpanelKey);
        }

        const buttonColor = this.props.color && !disabled ?  this.props.color : 'inherit';

        let label = this.props.label ? this.props.label : this.props.children;
        let iconName = this.props.icon;
        let IconComponent = this.props.iconComponent;
        let route = this.props.route;

        if (panel) {
            label = panel.name;
            iconName = panel.icon;
            IconComponent = panel.iconComponent;
            route = panel.route;
        }

        if (subpanel) {
            label = subpanel.name;
            iconName = subpanel.icon;
            IconComponent = subpanel.iconComponent;
        }


        // console.debug('GridButton.render() :', panel, subpanel)

        return (
            <Grid
                item
                key={this.props.key}
                xs={size}>
                { route ? (
                <Button
                    className={classes.button}
                    style={{ maxWidth: buttonSize }}
                    component={Link}
                    to={route}
                    disabled={disabled}
                    color={buttonColor}>
                    {this.renderButtonContent(label, iconName, IconComponent)}
                </Button>
                ) : subpanel ? (
                    <Button
                    className={classes.button}
                    style={{ maxWidth: buttonSize }}
                    onClick={this.handleClick}
                    disabled={disabled}
                    color={buttonColor}>
                    {this.renderButtonContent(label, iconName, IconComponent)}
                    <SubpanelDialog open={this.state.dialogOpen} onClose={this.handleDialogClose} subpanel={subpanel}></SubpanelDialog>
                </Button>
                ) : (
                    <Button
                    className={classes.button}
                    style={{ maxWidth: buttonSize }}
                    onClick={this.handleClick}
                    disabled={disabled}
                    color={buttonColor}>
                    {this.renderButtonContent(label, iconName, IconComponent)}
                </Button>
                )}
            </Grid>
        )
    }

    renderButtonContent (label, iconName, IconComponent) {
        const { classes } = this.props;

        const size = this.props.size ? this.props.size : 3;
        const iconSize = this.iconSizes[this.props.width] * size;

        const disabled = this.props.disabled;

        const highlight = this.props.highlight;
        const controlsColor = disabled ? 'disabled' : this.props.ThemeStore.controlsColor;
        const highlightColor = controlsColor === 'primary' ? 'secondary' : 'primary';
        const iconColor = highlight ? highlightColor : controlsColor;
        const labelColor = this.props.labelColor && !disabled ?  this.props.labelColor : 'inherit';

        const showLabels = isWidthUp('sm', this.props.width);

        return (
            <div>
                { iconName ? (
                    <Icon
                        style={{ fontSize: iconSize }}
                        color={iconColor}>
                        {iconName}
                    </Icon>
                ) : (
                    <IconComponent
                        style={{ fontSize: iconSize }}
                        color={iconColor}/>
                )}
                {showLabels && (
                    <Typography className={classes.label} variant="button" color={labelColor}>{label}</Typography>
                )}
            </div>
        )
    }
}

const styles = theme => ({
    button: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {

    },
    label: {

    }
});

GridButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(GridButton));