import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';

@inject('RatatoskrStore')
@observer
class CorePanel extends Component {
    state = {};

    render () {
        return (
            <div>Core</div>
        );
     }
}

const styles = {

};

CorePanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CorePanel);