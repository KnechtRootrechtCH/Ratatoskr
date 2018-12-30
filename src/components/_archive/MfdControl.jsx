import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';

@inject('RatatoskrStore')
@observer
class MfdControl extends Component {
    state = {
    };

    sizes = {
        'xs': 70,
        'sm': 90,
        'md': 100,
        'lg': 100,
        'xl': 150,
    }

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
        console.debug('handle click');
        if (this.state.command) {
            this.props.RatatoskrStore.executeCommand(this.state.command);
        } else if (this.state.tab) {
            console.debug('tab', this.state.tab);
            this.props.RatatoskrStore.setTab(this.state.tab);
        } else {
            console.debug('no command');
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

        const s = this.props.size ? this.props.size : 1;
        const size = this.sizes[this.props.width];
        let tileSize = s * size;
        let iconSize = size / 7 * 4;

        return (
            <Button
            onClick={this.handleClick}
            color={color}
            variant={variant}
            style={{width: tileSize}}
            className={classes.control}>
                <div>
                    { iconName &&
                    <Icon
                        style={{ fontSize: iconSize }}
                        color={iconColor}>
                        {iconName}
                    </Icon>
                     }
                    <Typography className={classes.label} variant="button" color={labelColor}>{label}</Typography>
                </div>
            </Button>
        )
    }
}

const styles = theme => ({
    control: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        padding: 6,
        margin: '0 5px 20px 5px',
    },
    icon: {

    },
    label: {
        margin: 0,
    }
});

MfdControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(MfdControl));