import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SaveIcon from '@material-ui/icons/Save';
import OkIcon from '@material-ui/icons/CheckCircle';
import TestingIcon from '@material-ui/icons/Autorenew';
import WarningIcon from '@material-ui/icons/Warning';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class ConnectionSettings extends Component {
    state = {
        server: '',
        port: '',
    };

    componentDidMount() {
        this.setState({
            server: this.props.RatatoskrStore.server,
            port: this.props.RatatoskrStore.port,
        })
    }

    handleSave = () => {
        this.props.RatatoskrStore.setServer(this.state.server);
        this.props.RatatoskrStore.setPort(this.state.port);
        this.props.RatatoskrStore.saveConnection();
        this.props.RatatoskrStore.testConnection();
    }

    handleServerChange = (event) => {
        this.setState({server: event.target.value});
    }

    handlePortChange = (event) => {
        this.setState({port: event.target.value});
    }

    render () {
        const { classes } = this.props;
        const connected = this.props.RatatoskrStore.connected;
        const testingConnection = this.props.RatatoskrStore.testingConnection;
        const serverChanged = this.state.server !== this.props.RatatoskrStore.server;
        const portChanged = this.state.port !== this.props.RatatoskrStore.port;
        const changed = serverChanged || portChanged;
        const disabled = testingConnection;
        const error = !connected && !testingConnection;

        const controlsColor = this.props.ThemeStore.controlsColor;
        const controlsVariant = controlsColor === 'inherit' ? 'contained' : 'outlined'

        let helperText = '';
        if (testingConnection) {
            helperText = 'Testing connection...';
        } else if (changed) {
            helperText = 'Update to test connection';
        } else if (connected) {
            helperText = 'Connection successful';
        } else {
            helperText = 'Connection failed';
        }

        return (
            <div className={classes.settings}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.header} variant='subtitle1' color='primary'>Connection</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label='Server'
                        className={classes.textField}
                        placeholder='0.0.0.0'
                        variant='filled'
                        error={error}
                        onChange={this.handleServerChange}
                        value={this.state.server}
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label='Port'
                        className={classes.textField}
                        placeholder='123'
                        variant='filled'
                        error={error}
                        helperText={helperText}
                        value={this.state.port}
                        onChange={this.handlePortChange}
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className={classes.button}
                            color={controlsColor}
                            variant={controlsVariant}
                            onClick={this.handleSave}
                            disabled={disabled}>
                                <SaveIcon className={classes.icon}/>
                                Update
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderIcon (testingConnection, connected) {
        const { classes } = this.props;

        if (testingConnection) {
            return (<TestingIcon className={classes.icon}/>)
        }

        if(connected) {
            return (<OkIcon  className={classes.icon}/>);
        }

        return (<WarningIcon className={classes.icon}/>)
    }
}

const styles = theme => ({
    settings: {
        width: 320,
        marginBottom: 10,
    },
    header: {
    },
    textField : {
        width: '100%',
    },
    button: {
        float: 'right',
    },
    icon: {
        marginRight: theme.spacing.unit,
    }
});

ConnectionSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectionSettings);