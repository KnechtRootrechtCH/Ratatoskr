import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SaveIcon from '@material-ui/icons/Save';
import OkIcon from '@material-ui/icons/CheckCircle';
import TestingIcon from '@material-ui/icons/Autorenew';
import WarningIcon from '@material-ui/icons/Error';

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

        let message = 'Disconnected'
        if (changed) {
            message = 'Update'
        }
        else if (testingConnection) {
            message = 'Testing...';
        }
        else if (connected) {
            message = 'Connected';
        }

        const color = changed ? 'primary' : 'default';

        return (
            <div className={classes.settings}>
                <div>
                    <Typography className={classes.header} variant="overline" color="primary">Connection settings</Typography>
                    <TextField
                        label="Server"
                        className={classes.serverTextField}
                        placeholder="0.0.0.0"
                        variant="filled"
                        onChange={this.handleServerChange}
                        value={this.state.server}
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
                <div className={classes.actions}>
                        <Chip
                            className={classes.chip}
                            label={message}
                            color={color}
                            onClick={this.handleSave}
                            disabled={disabled}
                            icon={this.renderIcon(testingConnection, connected, changed)}>
                        </Chip>
                </div>
            </div>
        )
    }

    renderIcon (testingConnection, connected, changed) {
        if(changed) {
            return (<SaveIcon />);
        }

        if (testingConnection) {
            return (<TestingIcon/>)
        }

        if(connected) {
            return (<OkIcon />);
        }

        return (<WarningIcon/>)
    }
}

const styles = theme => ({
    settings: {
        width: 320,
    },
    header: {
    },
    actions: {
        marginTop: 10,
    },
    serverTextField: {
        margin: 0,
        width: 200,
    },
    portTextField: {
        margin: 0,
        width: 100,
        float: 'right',
    },
    chip: {
        float: 'right',
        argin: theme.spacing.unit,
    },
    avatar: {

    },
    message: theme.typography.caption,
});

ConnectionSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectionSettings);