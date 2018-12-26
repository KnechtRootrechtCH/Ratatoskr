import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import CorePanel from './panels/CorePanel'
import IfcsPanel from './panels/IfcsPanel'
import SettingsPanel from './panels/SettingsPanel'

@inject('RatatoskrStore')
@observer
class PanelContainer extends Component {
    state = {};


    render () {
        const { classes } = this.props;
        const tab = this.props.RatatoskrStore.tab;
        const core = tab === 'core';
        const ifcs = tab === 'ifcs';
        const settings = tab === 'settings';

        console.debug('PanelContainer.render() : tab => ', tab)

        return (
            <div className={classes.container}>
                <Fade in={core}>
                    <CorePanel/>
                </Fade>
                <Fade in={ifcs}>
                    <IfcsPanel/>
                </Fade>
                <Fade in={settings}>
                    <SettingsPanel/>
                </Fade>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
});

PanelContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelContainer);