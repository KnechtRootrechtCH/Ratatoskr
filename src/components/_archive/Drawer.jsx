import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Drawer extends Component {
    state = {};


    render () {
        // const { classes } = this.props;
        return (
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>dvr</Icon>
                    </ListItemIcon>
                    <ListItemText>Basic Controls</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>blur_on</Icon>
                    </ListItemIcon>
                    <ListItemText>Flight Control Systems</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>battery_charging_full</Icon>
                    </ListItemIcon>
                    <ListItemText>Power Settings</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>security</Icon>
                    </ListItemIcon>
                    <ListItemText>Shields</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>flare</Icon>
                    </ListItemIcon>
                    <ListItemText>Targeting</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>headset</Icon>
                    </ListItemIcon>
                    <ListItemText>Communications</ListItemText>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </ListItem>
            </List>
        );
     }
}

const styles = {

};

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);