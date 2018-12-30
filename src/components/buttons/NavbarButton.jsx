import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';

@inject('RatatoskrStore')
@observer
class NavbarButton extends Component {
    state = {
    };

    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
            tab: props.tab,
            pressed: false,
        }
    }

    setPressed(pressed) {
        this.setState({
            pressed: pressed,
        })
    }

    handleClick = () => {
        if (this.state.command) {
            this.props.RatatoskrStore.executeCommand(this.state.command);
        } else if (this.state.tab) {
            this.props.RatatoskrStore.setTab(this.state.tab);
        } else {
            return;
        }
        this.setPressed(true);
        setTimeout(() => {
            this.setPressed(false)
        }, 350);
    }

    render () {
        const { classes } = this.props;

        const label = this.props.label ? this.props.label : this.props.children;
        const iconName = this.props.icon;

        const color = this.props.color ? this.props.color : 'inherit';
        const labelColor = this.props.labelColor ? this.props.labelColor : 'inherit';
        const iconBaseColor = this.props.iconColor ? this.props.iconColor: 'inherit';
        const iconColor = this.state.pressed ? 'disabled' : iconBaseColor;
        const variant= this.props.variant ? this.props.variant : 'text';

        const showLabels = isWidthUp('sm', this.props.width);

        return (
            <Button
                onClick={this.handleClick}
                color={color}
                variant={variant}
                className={classes.navbarButton}>
                    { iconName &&
                    <Icon
                        className={classes.icon}
                        color={iconColor}>
                        {iconName}
                    </Icon>
                    }
                    { showLabels &&
                        <Typography className={classes.label} variant="button" color={labelColor} noWrap>{label}</Typography>
                    }
            </Button>
        )
    }
}

const styles = theme => ({
    navbarButton: {
        margin: 0,
    },
    icon: {
    },
    label: {
        marginLeft: theme.spacing.unit,
    }
});

NavbarButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(NavbarButton));