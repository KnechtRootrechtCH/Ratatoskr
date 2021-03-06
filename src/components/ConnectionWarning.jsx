import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link'

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import SettingsIcon from '@material-ui/icons/Settings'

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class ConnectionWarning extends Component {
    state = {
    };

    render () {
        const classes = this.props.classes;
        const connected = this.props.RatatoskrStore.connected;
        const location = this.props.location.pathname.toLowerCase();
        const show = !connected && !location.includes('settings');

        let verticalPosition = 'top';
        if (this.props.ThemeStore.navbarPosition === 'top') {
            verticalPosition = 'bottom';
        }

        return (
                <Snackbar
                    className={classes.snackbar}
                    open={show}
                    anchorOrigin={{
                        vertical: verticalPosition,
                        horizontal: 'center',
                      }}>
                    <SnackbarContent
                        className={classes.content}
                        action={
                            <Button className={classes.button} size='small' component={Link} to='/settings'>
                                Please update connection settings&nbsp;
                                <SettingsIcon className={classes.icon}/>
                            </Button>
                        }>
                    </SnackbarContent>
                </Snackbar>
        );
     }
}

const styles = theme => ({
    snackbar: {
        margin: theme.spacing.unit,
    },
    content: {
        backgroundColor: theme.palette.secondary.main,
    },
    button: {
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        marginLeft: theme.spacing.unit,
    }
});

ConnectionWarning.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ConnectionWarning));