import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import {Dialog, DialogContent, DialogTitle, Slide, Paper, DialogActions, Button} from '@material-ui/core';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

@inject('ThemeStore')
@observer
class SubpanelDialog extends Component {

    handleClose = (event, reason) => {
        event.preventDefault();
        // HACK: Set state doesn't stick during event execution.
        setTimeout(() => {
            if (this.props.open && this.props.onClose !== null) {
                this.props.onClose(reason);
            }
        }, 1);
    }

    render () {
        const { classes } = this.props;

        // console.log('SubpanelDialog.render() :', this.props.subpanel);
        return (
            <Dialog
                className={classes.dialog}
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}>
                { this.props.subpanel.header && (
                    <DialogTitle className={classes.title}>{this.props.subpanel.header}</DialogTitle>
                )}
                <DialogContent className={classes.content}>
                    <Paper
                        className={classes.paper}
                        component={this.props.subpanel.component}/>
                </DialogContent>
                <DialogActions>
                    { this.props.subpanel.showActions && (
                        <Button onClick={this.handleClose}>Close</Button>
                    )}
                </DialogActions>
            </Dialog>
        );
     }
}

const styles = theme => ({
    title: {
        textAlign: 'center',
    },
    content: {
        padding: theme.spacing.unit,
        textAlign: 'center',
    },
});

SubpanelDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubpanelDialog);