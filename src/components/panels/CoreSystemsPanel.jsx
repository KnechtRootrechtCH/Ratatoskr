import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
// import Icon from '@material-ui/core/Icon';
// import IconButton from '@material-ui/core/IconButton';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import GridButton from '../buttons/GridButton';

@inject('RatatoskrStore')
@observer
class CoreSystemsPanel extends Component {
    state = {};

    // spacints: 0,8,16,24,32,40

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Grid container spacing={16}>
                            <GridButton
                                key='ifcs'
                                subpanelKey='ifcs'
                                size={3}>
                            </GridButton>
                            <GridButton
                                key='access'
                                subpanelKey='access'
                                size={3}>
                            </GridButton>
                </Grid>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        // horizontal center
        textAlign: 'center',
        // styling
        padding: 10,
        color: theme.palette.text.primary,
    },
});

CoreSystemsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoreSystemsPanel);