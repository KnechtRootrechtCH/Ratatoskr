import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Instructions extends Component {
    state = {
    };

    componentDidMount() {
    }

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.settings}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.header} variant="subtitle1" color="primary">Instructions</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography className={classes.header} variant="body1" color="textSecondary">
                        Funky fresh interdum ma nizzle phat. Ut dizzle nizzle lorizzle. Gangster daahng dawg est. Nulla shizznit massa, ultrices nizzle, mofo yo mamma, fermentum break it down, pede. Nizzle nizzle own yo'. Etizzle rutrizzle the bizzle we gonna chung. Mauris fo shizzle my nizzle. Vestibulizzle i'm in the shizzle pede gizzle nibh my shizz commodo. Lorem dizzle dolizzle sizzle my shizz, consectetizzle yo mamma yo mamma. Sed izzle . Quisque gangsta sizzle, gizzle izzle, ma nizzle a, eleifend sheezy, elit.
                        </Typography>
                     </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = theme => ({
    settings: {
        width: 320,
        marginBottom: 10,
    },
    header: {
    },
});

Instructions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instructions);