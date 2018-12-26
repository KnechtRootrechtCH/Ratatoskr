import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import BasicsIcon from '@material-ui/icons/Dvr';
import IfcsIcon from '@material-ui/icons/Flight'
import PowerIcon from '@material-ui/icons/BatteryChargingFull'
import ShieldsIcon from '@material-ui/icons/Security'
// import TargetingIcon from '@material-ui/icons/Flare'
import CommunicationsIcon from '@material-ui/icons/Headset'
// import SettingsIcon from '@material-ui/icons/Settings'

@inject('SettingsStore')
@observer
class Navigation extends Component {
    state = {
        tab: "core",
    };

    handleChange = (event, value) => {
        event.preventDefault();
        this.props.SettingsStore.setTab(value);
    };

    render () {
        const classes = this.props.classes;
        const tab = this.props.SettingsStore.tab;
        const showLabels = isWidthUp('sm', this.props.width);

        return (
            <AppBar className={classes.bar} position="fixed" color="primary">
                <Tabs className={classes.tabs} value={tab} onChange={this.handleChange} scrollButtons="on" centered>
                    <Tab
                        value="core"
                        label={ showLabels ? "Main" : null }
                        icon={<BasicsIcon/>}/>
                    <Tab
                        value="flight"
                        label={ showLabels ? "IFCS" : null }
                        icon={<IfcsIcon/>}/>
                    <Tab
                        value="power"
                        label={ showLabels ? "Power" : null }
                        icon={<PowerIcon/>}/>
                    <Tab
                        value="shields"
                        label={ showLabels ? "Shields" : null }
                        icon={<ShieldsIcon/>}/>
                    <Tab
                        value="comms"
                        label={ showLabels ? "Comms" : null }
                        icon={<CommunicationsIcon/>}/>
                </Tabs>
            </AppBar>
        );
     }
}

const styles = {
    bar: {
        flexGrow: 1,
        width: '100%',
    },
    tabs: {
    }
};

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(Navigation));