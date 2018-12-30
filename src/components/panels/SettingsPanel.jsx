import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import About from '../settings/About';
import ConnectionSettings from '../settings/ConnectionSettings';
import Instructions from '../settings/Instructions';
import ThemeSettings from '../settings/ThemeSettings';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class SettingsPanel extends Component {
    state = {};


    render () {
        const { classes } = this.props;

        const noNavbar = this.props.ThemeStore.hideNavbar;
        const topNavbar = !noNavbar && !this.props.ThemeStore.bottomNavbar;
        const bottomNavbar = !noNavbar && this.props.ThemeStore.bottomNavbar;

        return (
            <div className={classes.container}>
                { topNavbar &&
                    <div className={classes.spacer}/>
                }
                <ConnectionSettings/>
                <ThemeSettings/>
                <Instructions/>
                <About/>
                { bottomNavbar &&
                    <div className={classes.spacer}/>
                }
            </div>
        );
     }
}

const styles = {
    container: {
        marginTop: 10,
    },
    spacer: {
        height: 85,
    },
};

SettingsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsPanel);