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

@inject('RatatoskrStore')
@observer
class GridButton extends Component {
    state = {
    };

    iconSizes = {
        'xs': 14,
        'sm': 14,
        'md': 24,
        'lg': 24,
        'xl': 32,
    }

    buttonSizes = {
        'xs': 6,
        'sm': 12,
        'md': 18,
        'lg': 24,
        'xl': 30,
    }

    handleClick = () => {
        if (this.props.command) {
            this.props.RatatoskrStore.executeCommand(this.props.command);
        }
    }

    render () {
        const { classes } = this.props;

        const size = this.props.size ? this.props.size : 3;
        const iconSize = this.iconSizes[this.props.width] * size;
        const buttonSize = this.buttonSizes[this.props.width] * size;

        const route = this.props.route;
        const label = this.props.label ? this.props.label : this.props.children;
        const iconName = this.props.icon;

        // colors
        const labelColor = this.props.labelColor ?  this.props.labelColor : 'inherit';
        const iconColor = this.props.iconColor ?  this.props.iconColor : 'inherit';
        const buttonColor = this.props.color ?  this.props.color : 'inherit';

        const showLabels = isWidthUp('sm', this.props.width);

        const disabled = this.props.disabled;

        return (
            <Grid item xs={size}>
                { route ? (
                <Button
                    className={classes.button}
                    style={{ maxWidth: buttonSize }}
                    component={Link}
                    to={route}
                    disabled={disabled}
                    color={buttonColor}>
                    <div>
                        <Icon
                            style={{ fontSize: iconSize }}
                            color={iconColor}>
                            {iconName}
                        </Icon>
                        {showLabels && (
                            <Typography className={classes.label} variant="button" color={labelColor}>{label}</Typography>
                        )}
                    </div>
                </Button>
                ):(
                <Button
                    className={classes.button}
                    style={{ maxWidth: buttonSize }}
                    onClick={this.handleClick}
                    disabled={disabled}
                    color={buttonColor}>
                    <div>
                        <Icon
                            style={{ fontSize: iconSize }}
                            color={iconColor}>
                            {iconName}
                        </Icon>
                        {showLabels && (
                            <Typography className={classes.label} variant="button" color={labelColor}>{label}</Typography>
                        )}
                    </div>
                </Button>
                )}
            </Grid>
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