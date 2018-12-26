import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

@inject('RatatoskrStore')
@observer
class SettingsPanel extends Component {
    state = {};


    render () {
        return (
            <div>Settings</div>
        );
     }
}

const styles = {

};

SettingsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsPanel);