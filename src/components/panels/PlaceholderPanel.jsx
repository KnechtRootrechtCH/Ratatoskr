import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import {Icon, Typography} from '@material-ui/core';

@inject('ThemeStore')
@observer
class PlaceholderPanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Icon className={classes.icon} color='primary'>error_outline</Icon>
                <Typography variant='subtitle1' color='default'>
                    This panel is not yet available
                </Typography>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        marginTop: 10,
        textAlign: 'center',
    },
    icon: {
        margin: theme.spacing.unit,
    },
    message: {
        textAlign: 'center',
    },
});

PlaceholderPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaceholderPanel);