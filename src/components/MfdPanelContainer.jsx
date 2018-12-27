import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import CorePanel from './panels/CorePanel'
import IfcsPanel from './panels/IfcsPanel'
import SettingsPanel from './panels/SettingsPanel'
import MfdPanel from './MfdPanel';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class MfdPanelContainer extends Component {
    state = {
        tabs: ['core', 'ifcs', 'power', 'shields', 'comms']
    };


    handleChangeIndex = (value) => {
        this.props.RatatoskrStore.setTab(value);
        const index = this.state.tabs[value];
        this.props.RatatoskrStore.setTab(index);
    }

    render () {
        const { classes } = this.props;
        const theme = this.props.ThemeStore.theme;
        const show = this.props.RatatoskrStore.tab !== 'settings';

        let index = this.state.tabs.indexOf(this.props.RatatoskrStore.tab);
        if (index < 0) {
            index = 0;
        }

        return (
            ( show &&
                <SwipeableViews
                    className={classes.container}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={index}
                    onChangeIndex={this.handleChangeIndex}>
                    <MfdPanel><CorePanel/></MfdPanel>
                    <MfdPanel><IfcsPanel/></MfdPanel>
                    <MfdPanel><SettingsPanel/></MfdPanel>
                    <MfdPanel><SettingsPanel/></MfdPanel>
                    <MfdPanel><SettingsPanel/></MfdPanel>
                </SwipeableViews>
            )
        )
    }
}

const styles = theme => ({
    container: {

      },
});

MfdPanelContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MfdPanelContainer);