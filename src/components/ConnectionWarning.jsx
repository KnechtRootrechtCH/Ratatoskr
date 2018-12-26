import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import SettingsIcon from '@material-ui/icons/Settings'

@inject('RatatoskrStore')
@observer
class ConnectionWarning extends Component {
    state = {
        tab: "core",
    };

    handleChange = (event, value) => {
        event.preventDefault();
        this.props.RatatoskrStore.setTab(value);
    };

    handleClick = (event) => {
        this.props.RatatoskrStore.setTab('settings');
    }

    render () {
        const classes = this.props.classes;
        const connected = this.props.RatatoskrStore.connected;
        const tab = this.props.RatatoskrStore.tab;
        const show = !connected && tab !== 'settings';

        return (
                <Snackbar
                    className={classes.snackbar}
                    open={show}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}>
                    <SnackbarContent
                        className={classes.content}
                        action={
                            <Button className={classes.button} size="small" onClick={this.handleClick}>
                                Please update connection settings&nbsp;
                                <SettingsIcon/>
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
        backgroundColor: theme.palette.primary.dark,
    },
    button: {
        color: theme.palette.common.black,
    }
});

ConnectionWarning.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectionWarning);