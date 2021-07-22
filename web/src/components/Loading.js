import React from 'react';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBackground: {
    backgroundColor: theme.palette.common.whitesmoke,
    width: '100vw',
    height: '100vh',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Grid
      container={true}
      direction="column"
      className={classes.appBackground}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="secondary" size={100} thickness={6} />
      <Typography variant="h4" style={{ marginTop: '2em' }}>
        Populating Posts . . .
      </Typography>
    </Grid>
  );
};

export default Loading;
