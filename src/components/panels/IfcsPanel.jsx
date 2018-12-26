import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

@inject('RatatoskrStore')
@observer
class IfcsPanel extends Component {
    state = {};


    render () {
        return (
            <div>IFCS</div>
        );
     }
}

const styles = {

};

IfcsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IfcsPanel);