import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SaveIcon from '@material-ui/icons/Save';
import OkIcon from '@material-ui/icons/CheckCircle';
import TestingIcon from '@material-ui/icons/Autorenew';

@inject('RatatoskrStore')
@observer
class ConnectionSettings extends Component {
    state = {
        server: '',
        port: '',
    };

    componentDidMount() {
        console.debug('ConnectionSettings.componentDidMount()');
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

    handleUndo = () => {
        this.setState({
            server: this.props.RatatoskrStore.server,
            port: this.props.RatatoskrStore.port,
        })
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
        const disabled = !changed || testingConnection;

        let helperText = 'Connection failed!'
        if (testingConnection) {
            helperText = 'Testing connection...';
        }
        else if (changed) {
            helperText = 'Save to test connection'
        }
        else if (connected) {
            helperText = 'Connection successfull';
        }
        return (
            <div>
                <div>
                    <Typography className={classes.header} variant="overline">Connection settings</Typography>
                    <TextField
                        label="Server"
                        className={classes.serverTextField}
                        placeholder="0.0.0.0"
                        variant="filled"
                        onChange={this.handleServerChange}
                        value={this.state.server}
                        helperText={helperText}
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                    <TextField
                        label="Port"
                        className={classes.portTextField}
                        placeholder="123"
                        variant="filled"
                        value={this.state.port}
                        onChange={this.handlePortChange}
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                </div>
                <div>
                    <span className={classes.buttons}>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            color="primary"
                            disabled={disabled}
                            onClick={this.handleSave}>
                                { (!connected || changed) && !testingConnection && (
                                    <SaveIcon className={classes.iconSmall} />
                                )}
                                { connected && !testingConnection && !changed && (
                                    <OkIcon className={classes.iconSmall} />
                                )}
                                { testingConnection && (
                                    <TestingIcon className={classes.iconSmall} />
                                )}
                                Save
                        </Button>
                    </span>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    header : {
        color: theme.palette.primary.main,
    },
    button : {
        margin: 0,
    },
    buttons : {
        float: 'right',
    },
    serverTextField : {
        margin: '0 10px 0 0',
        width: 200,
    },
    portTextField : {
        margin: '0 0 0 10px',
        width: 100,
    },
    spacer : {
        width: 20,
    },
    iconSmall: {
        marginRight: theme.spacing.unit,
        fontSize: 20,
    },
});

ConnectionSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectionSettings);