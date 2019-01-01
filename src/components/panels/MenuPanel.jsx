import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import GridButton from '../buttons/GridButton';

import PanelsService from '../../service/PanelsService';

@inject('RatatoskrStore')
@inject('ThemeStore')
@observer
class MenuPanel extends Component {
    state = {};

    render () {
        const { classes } = this.props;

        const panels = PanelsService.panels;

        console.debug('MenuPanel.render()');

        return (
            <div className={classes.container}>
                <Grid container spacing={16}>
                    { panels.map((panel) => {
                        return (
                            ( panel.menu && (
                            <GridButton
                                key={panel.key}
                                icon={panel.icon}
                                route={panel.route}
                                size={3}>
                                {panel.name}
                            </GridButton>
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
        textAlign: 'center',
        padding: 0,
        color: theme.palette.text.primary,
    },
    grid: {
    },
});

MenuPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuPanel);