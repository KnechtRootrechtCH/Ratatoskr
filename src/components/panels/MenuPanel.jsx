import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import GridButton from '../buttons/GridButton';

import PanelService from '../../service/PanelService';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class MenuPanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const panels = PanelService.panels;

        console.debug('MenuPanel.render()');

        return (
            <div className={classes.container}>
                <Grid container spacing={16}>
                    { panels.map((panel) => {
                        return (
                            ( panel.menu && (
                            <GridButton
                                key={panel.key}
                                panel={panel}
                                size={3}/>
                            ))
                        )
                    })}
                </Grid>
            </div>
        );
     }
}

const styles = theme => ({
    container: {
        // vertical center
        display: 'flex',
        flex: 1,
        flexFlow: 'column',
        justifyContent: 'center',
        // horizontal center
        textAlign: 'center',
        // styling
        padding: 20,
        color: theme.palette.text.primary,
    },
    grid: {
    },
});

MenuPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuPanel);