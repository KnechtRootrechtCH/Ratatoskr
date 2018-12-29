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

    // spacints: 0,8,16,24,32,40

    render () {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.controlRow}>
                    <Control
                        command='Power'
                        label='Power'
                        icon='power_settings_new'
                        variant='text'
                        color='primary'
                        labelColor='default'
                        iconColor='inherit'/>

                    <Control
                        command='Power_Engines'
                        label='Engines'
                        icon='blur_circular'
                        variant='outlined'
                        color='primary'
                        labelColor='default'
                        iconColor='inherit'/>

                </div>
                <div className={classes.controlRow}>
                    <Control
                            command='Test'
                            label='Testing testing testing'
                            icon='check_circle_outline'
                            variant='outlined'
                            color='primary'
                            labelColor='default'
                            iconColor='inherit'/>
                </div>

            </div>
        );
     }
}

const styles = theme => ({
    controlRow: {
        textAlign: 'center',
    }
});

CorePanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CorePanel);