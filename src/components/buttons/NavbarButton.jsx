import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';

@inject('RatatoskrStore')
@observer
class NavbarButton extends Component {
    state = {
    };

    handleClick = () => {
        if (this.props.command) {
            this.props.RatatoskrStore.executeCommand(this.props.command);
        }
    }

    render () {
        const { classes } = this.props;

        const label = this.props.label ? this.props.label : this.props.children;
        const iconName = this.props.icon;

        const color = this.props.color ? this.props.color : 'inherit';
        const labelColor = this.props.labelColor ? this.props.labelColor : 'inherit';
        const iconColor = this.props.iconColor ? this.props.iconColor: 'inherit';
        const variant= this.props.variant ? this.props.variant : 'text';

        const showLabels = isWidthUp('sm', this.props.width);

        const route = this.props.route;

        return (
            (route ? (
            <Button
                color={color}
                variant={variant}
                component={Link}
                to={route}
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
            ):(
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
            ))

        )
    }
}

const styles = theme => ({
    navbarButton: {
        margin: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
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