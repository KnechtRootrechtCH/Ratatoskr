import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import Drawer from './Drawer'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

@inject('SettingsStore')
@observer
class TitleBar extends Component {
    state = {
        drawer: false,
        menu: true,
      };

    openDrawer = () => {
        this.setState({
            drawer: true,
          });
    };

    closeDrawer = () => {
        this.setState({
            drawer: false,
          });
    };

    showMenubar = () => {
        this.props.SettingsStore.showMenubar = true;
    };

    hideMenubar = () => {
        this.props.SettingsStore.showMenubar = false;
    };

    render () {
        const { classes } = this.props;
        const badgeContent = this.props.SettingsStore.settingAlerts;
        const showMenuBar = this.props.SettingsStore.showMenubar || badgeContent > 0;
        return (
            <div>
                <Slide direction="down" in={showMenuBar} mountOnEnter unmountOnExit>
                    <AppBar position="fixed" color="primary">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openDrawer}>
                                <Icon >menu</Icon>
                            </IconButton>
                            <Typography className={classes.title} variant="title" noWrap>
                                Ratatoskr - Star Citizen MFD
                            </Typography>
                            { badgeContent > 0 &&
                                <IconButton className={classes.settingsButton} aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                    <Badge badgeContent={badgeContent} color="secondary">
                                        <Icon>settings</Icon>
                                    </Badge>
                                </IconButton>
                            }
                        </Toolbar>
                    </AppBar>
                </Slide>
                <SwipeableDrawer
                    anchor="left"
                    open={this.state.drawer}
                    onClose={this.closeDrawer}
                    onOpen={this.openDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.closeDrawer}
                        onKeyDown={this.closeDrawer}>
                        <Drawer/>
                    </div>
                </SwipeableDrawer>
            </div>
        );
     }
}

const styles = {
    title: {
        flexGrow: 1,
    },
    fullscreenButton: {
    },
    settingsButton: {
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

TitleBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);