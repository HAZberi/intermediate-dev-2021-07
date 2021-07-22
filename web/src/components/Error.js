import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBackground: {
    backgroundColor: theme.palette.common.whitesmoke,
    width: '100vw',
    height: '100vh',
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <Grid
      container={true}
      direction="column"
      className={classes.appBackground}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">Oops something went wrong!!</Typography>
      <Typography variant="h4" style={{ marginTop: '1em' }}>
        Please try again or Refresh the page.
      </Typography>
    </Grid>
  );
};

export default Error;
