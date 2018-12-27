import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

@inject('ThemeStore')
@observer
class MfdPanel extends Component {
    state = {};


    render () {
        const { classes } = this.props;
        const theme = this.props.ThemeStore.theme;
        const children = this.props.children;

        return (
            <div className={classes.panel} dir={theme.direction}>
                {children}
            </div>
        );
     }
}

const styles = theme => ({
    panel : {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

MfdPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MfdPanel);