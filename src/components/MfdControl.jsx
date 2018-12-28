import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

@inject('RatatoskrStore')
@observer
class MfdControl extends Component {
    state = {
    };

    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
        }
    }

    handleClick = () => {
        this.props.RatatoskrStore.executeCommand(this.props.command);
    }

    render () {
        const { classes } = this.props;
        const children = this.props.children;
        const xs = this.props.xs;

        return (
            <Grid
                onClick={this.handleClick}
                className={classes.gridItem}
                item xs={xs}>
                <div className={classes.content}>
                    {children}
                </div>
            </Grid>
        )
    }
}

const styles = theme => ({
    gridItem: {
        position: 'relative',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
});

MfdControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MfdControl);