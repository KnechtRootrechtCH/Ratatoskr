import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

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

        return (
            <div className={classes.container}>
                <div className={classes.panels}>
                    <Switch>
                        <Route path="/" exact component={MenuPanel}/>

                        <Route path="/settings" exact component={SettingsPanel}/>
                    </Switch>
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
});

PanelContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelContainer);