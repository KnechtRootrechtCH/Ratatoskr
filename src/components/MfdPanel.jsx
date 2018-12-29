import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

@inject('ThemeStore')
@observer
class MfdPanel extends Component {
    state = {};


    render () {
        const { classes } = this.props;
        const theme = this.props.ThemeStore.theme;
        const children = this.props.children;
        const noNavbar = this.props.ThemeStore.hideNavbar;
        const topNavbar = !noNavbar && !this.props.ThemeStore.bottomNavbar;
        const bottomNavbar = !noNavbar && this.props.ThemeStore.bottomNavbar;

        const title = noNavbar ? this.props.title : null;

        return (
            <div className={classes.panel} dir={theme.direction}>
                { topNavbar &&
                    <div className={classes.spacer}/>
                }
                { title &&
                    <Typography className={classes.header} variant="h6" color="inherit">Connection settings</Typography>
                }
                {children}
                { bottomNavbar &&
                    <div className={classes.spacer}/>
                }
            </div>
        );
     }
}

const styles = theme => ({
    header: {
        margin: 5,
    },
    panel: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // horizontal center
        // justifyContent: 'center', // vertical center
        padding: 5,
    },
    spacer: {
        height: 85,
    },
});

MfdPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MfdPanel);