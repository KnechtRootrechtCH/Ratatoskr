import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Control from '../MfdControl'

import Grid from '@material-ui/core/Grid';

@inject('RatatoskrStore')
@observer
class CorePanel extends Component {
    state = {};

    render () {
        return (
            <Grid container spacing={16}>
                <Control xs={2} command="Test">blubb</Control>
            </Grid>

        );
     }
}

const styles = {

};

CorePanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CorePanel);