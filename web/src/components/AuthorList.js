import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import findUniqueAuthors from '../helpers/findUniqueAuthors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: '2em',
  },
}));

const AuthorList = ({ posts, setAuthorId }) => {
  const classes = useStyles();
  const uniqueAuthors = findUniqueAuthors(posts);
  return (
    <>
      <Grid container={true} direction="column">
        <Grid item={true} className={classes.header}>
          <Typography variant="h4" align="center" gutterBottom={true}>
            Authors
          </Typography>
        </Grid>
        <Grid item={true}>
          <List aria-label="authors list">
            <Divider />
            {uniqueAuthors.map((author) => (
              <>
                <ListItem
                  key={author.id}
                  button={true}
                  onClick={() => {
                    setAuthorId(author.id);
                  }}
                >
                  <ListItemText primary={author.name} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthorList;
