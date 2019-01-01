import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link'
import PanelsService from '../service/PanelsService'

import {
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer, } from '@material-ui/core';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class NavigationDrawer extends Component {
    state = {
        drawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            drawer: open,
        })
    }

    render () {
        const classes = this.props.classes;

        const panels = PanelsService.panels;

        return (
            <SwipeableDrawer
                className={classes.drawer}
                anchor='left'
                open={this.state.drawer}
                onClose={this.toggleDrawer(false)}
                onOpen={this.toggleDrawer(true)}>
                <List>
                    { panels.map((panel) => {
                        return (
                            ( panel.drawer && (
                            <ListItem
                                button
                                onClick={this.toggleDrawer(false)}
                                key={panel.key}
                                className={classes.item}
                                component={Link}
                                to={panel.route}>
                                <ListItemIcon>
                                    <Icon className={classes.icon}>{panel.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={panel.name}/>
                            </ListItem>
                            ))
                        )
                    })}
                </List>
            </SwipeableDrawer>
        );
     }
}

const styles = theme => ({
    drawer: {

    },
    item: {

    },
    icon: {

    },
});

NavigationDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);