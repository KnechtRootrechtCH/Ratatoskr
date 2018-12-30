import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import About from './settings/About';
import ConnectionSettings from './settings/ConnectionSettings';
import Instructions from './settings/Instructions';
import ThemeSettings from './settings/ThemeSettings';


@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class Settings extends Component {
    state = {
    };

    componentDidMount() {
    }

    render () {
        const { classes } = this.props;
        const show = this.props.RatatoskrStore.tab === 'settings';

        const noNavbar = this.props.ThemeStore.hideNavbar;
        const topNavbar = !noNavbar && !this.props.ThemeStore.bottomNavbar;
        const bottomNavbar = !noNavbar && this.props.ThemeStore.bottomNavbar;

        return (
            ( show &&
                <div className={classes.settings}>
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
            )
        )
    }
}

const styles = theme => ({
    settings : {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // horizontal center
        // justifyContent: 'center', // vertical center
        padding: 10,
    },
    spacer: {
        height: 85,
    }
});

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);