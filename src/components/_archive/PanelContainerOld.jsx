import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import CorePanel from './panels/CorePanel'
import IfcsPanel from './panels/IfcsPanel'
import MenuPanel from './panels/MenuPanel'
import SettingsPanel from './panels/SettingsPanel'
import MfdPanel from './MfdPanel';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class PanelContainer extends Component {
    state = {
        tabs: ['menu', 'core', 'ifcs', 'power', 'shields', 'comms', 'settings']
    };


    handleChangeIndex = (value) => {
        this.props.RatatoskrStore.setTab(value);
        const index = this.state.tabs[value];
        this.props.RatatoskrStore.setTab(index);
    }

    render () {
        const { classes } = this.props;
        const theme = this.props.ThemeStore.theme;

        let index = this.state.tabs.indexOf(this.props.RatatoskrStore.tab);
        if (index < 0) {
            index = 0;
        }

        console.debug(this.state.tab, index);

        return (
            <SwipeableViews
                className={classes.container}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={index}
                onChangeIndex={this.handleChangeIndex}>
                <MfdPanel title='Menu'><MenuPanel/></MfdPanel>
                <MfdPanel title='Main Systems'><CorePanel/></MfdPanel>
                <MfdPanel title='I.F.C.S.'><IfcsPanel/></MfdPanel>
                <MfdPanel title='Power Management'><CorePanel/></MfdPanel>
                <MfdPanel title='Shield Management'><CorePanel/></MfdPanel>
                <MfdPanel title='Communications'><CorePanel/></MfdPanel>
                <MfdPanel title='Settings'><SettingsPanel/></MfdPanel>
            </SwipeableViews>
        )
    }
}

const styles = theme => ({
    container: {

      },
});

PanelContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelContainer);