import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class About extends Component {
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
                        <Typography className={classes.header} variant="subtitle1" color="primary">About</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography className={classes.header} variant="body" color="default">
                        Fo shizzle rizzle dolor. Shut the shizzle up magna crunk, dignissim sure amizzle, bling bling sizzle, shizzlin dizzle nizzle, break it down. Maecenizzle izzle break it down. Sizzle malesuada shiznit yo risus. Suspendisse shizzlin dizzle. Crizzle aliquet ass turpizzle. Suspendisse my shizz i'm in the shizzle fo shizzle my nizzle. Sizzle doggy boom shackalack, interdizzle, posuere izzle, dapibus et, dang. Shiz check out this dang. Pimpin' shiz lectus sizzle pot dolizzle. Phat tellivizzle felizzle izzle nizzle. Lorizzle ipsum dolizzle amizzle, bow wow wow adipiscing elit. Suspendisse massa purizzle, go to hizzle yo, ullamcorper id, gangsta mammasay mammasa mamma oo sa, fo shizzle. Nizzle porta rutrum nunc.
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

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);