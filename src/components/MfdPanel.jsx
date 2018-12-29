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
                <div className={classes.spacer}/>
                {children}
                <div className={classes.spacer}/>
            </div>
        );
     }
}

// to center content verticaly: justifyContent: 'center',

const styles = theme => ({
    panel : {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spacer: {
        height: 100,
    },
});

MfdPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MfdPanel);