import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import {
    Icon,
    Tabs,
    Tab } from '@material-ui/core';

import PanelService from '../service/PanelService';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class NavigationTabs extends Component {

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render () {
        const classes = this.props.classes;

        const navbarColor = this.props.ThemeStore.navbarColor;
        const indicatorColor = navbarColor === 'primary' ? 'secondary' : 'primary'

        const showLabels = isWidthUp('sm', this.props.width);

        const location = this.props.location.pathname.toLowerCase().replace('/', '');
        let tab = false;

        PanelService.panels.forEach((panel) => {
            if(panel.tabs && panel.key === location) {
                tab = panel.key;
            }
        })

        return (
            <Tabs
                className={classes.tabs}
                value={tab}
                onChange={this.handleChange}
                indicatorColor={indicatorColor}
                variant='fullWidth'
                centered>
                { PanelService.panels.map((panel) => {
                    return (
                        ( panel.tabs && (
                            <Tab
                                key={panel.key}
                                component={Link}
                                to={panel.route}
                                textColor="inherit"
                                value={panel.key}
                                label={ showLabels ? panel.shortName : null }
                                icon={panel.icon ? (
                                        <Icon>{panel.icon}</Icon>
                                    ) : (
                                        <panel.iconComponent/>
                                    )
                                }/>
                        ))
                    )
                })}
            </Tabs>
        );
     }
}

const styles = theme => ({
    tabs: {

    },
});

NavigationTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(withRouter(NavigationTabs)));