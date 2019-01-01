import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import About from '../settings/About';
import AdvancedSettings from '../settings/AdvancedSettings';
import ConnectionSettings from '../settings/ConnectionSettings';
import ControlsSettings from '../settings/ControlsSettings';
import Instructions from '../settings/Instructions';
import NavigationSettings from '../settings/NavigationSettings';
import ThemeSettings from '../settings/ThemeSettings';

@inject('ThemeStore')
@observer
class SettingsPanel extends Component {
    state = {};


    render () {
        const { classes } = this.props;

        const advanced = this.props.ThemeStore.advancedMode;

        return (
            <div className={classes.container}>
                <ConnectionSettings/>
                <ThemeSettings/>
                <AdvancedSettings/>
                { advanced && (
                    <NavigationSettings/>
                )}
                { advanced && (
                    <ControlsSettings/>
                )}
                <Instructions/>
                <About/>
            </div>
        );
     }
}

const styles = {
    container: {
        marginTop: 10,
    },
};

SettingsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsPanel);