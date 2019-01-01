import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Typography from '@material-ui/core/Typography'

import ScreenRotationIcon from '@material-ui/icons/ScreenRotation'

import MenuPanel from './panels/MenuPanel';
import SettingsPanel from './panels/SettingsPanel';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class PanelContainer extends Component {
    state = {
    };

    render () {
        const { classes } = this.props;

        const noNavbar = this.props.ThemeStore.navbarPosition === 'none';
        const topNavbar = !noNavbar && this.props.ThemeStore.navbarPosition === 'top';
        const bottomNavbar = !noNavbar && this.props.ThemeStore.navbarPosition === 'bottom';

        const rotateScreen = !isWidthUp('sm', this.props.width);

        return (
            <div className={classes.container}>
                <div className={classes.panels}>
                { topNavbar &&
                    <div className={classes.spacer}/>
                }
                { rotateScreen ? (
                    <div className={classes.rotationMessage}>
                        <ScreenRotationIcon className={classes.rotationIcon} color='primary'/>
                        <Typography variant='subtitle1' color='primary'>
                            Please rotate your device
                        </Typography>
                    </div>
                ) : (
                    <Switch>
                        <Route path='/' exact component={MenuPanel}/>

                        <Route path='/settings' exact component={SettingsPanel}/>
                    </Switch>
                )}
                { bottomNavbar &&
                    <div className={classes.spacer}/>
                }
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    container: {
        backgroundColor: theme.palette.background.default,
    },
    panels: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // horizontal center
        justifyContent: 'center', // vertical center
    },
    spacer: {
        height: 65,
    },
    rotationIcon: {
        margin: theme.spacing.unit,
    },
    rotationMessage: {
        textAlign: 'center',
    },
});

PanelContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(PanelContainer));