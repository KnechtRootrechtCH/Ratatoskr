import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withRouter } from 'react-router';
import Link from 'react-router-dom/Link';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab'

import HomeIcon from '@material-ui/icons/Home'

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class HomeFab extends Component {
    state = {
    };

    render () {
        const { classes } = this.props;
        const noNavbar = this.props.ThemeStore.navigationMode === 'drawer';
        const location = this.props.location.pathname.toLowerCase();
        const show = noNavbar && location !== '/';

        return (
            (show && (
                <Fab
                    className={classes.fab}
                    component={Link}
                    to='/'
                    color='primary'
                    aria-label='Home'>
                    <HomeIcon className={classes.icon}/>
                </Fab>

            ))
        )
    }
}

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
        position: 'fixed',
        zIndex: 3,
        left: 10,
        top: 10,
        width: 40,
        height: 40,
        cursor: 'pointer',
    },
    icon: {

    },
});

HomeFab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(HomeFab));