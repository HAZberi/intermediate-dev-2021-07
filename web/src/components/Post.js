import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
  postTitle: {
    marginTop: '1em',
  },
  postContainer: {
    width: '100%',
  },
  contentSpacing: {
    marginLeft: '2em',
    marginRight: '2em',
  },
}));

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid
      container={true}
      direction="column"
      alignItems="center"
      className={classes.postContainer}
    >
      <Grid item={true}>
        <Typography variant="h2" align="center" className={classes.postTitle}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          By {post.author.name}
        </Typography>
      </Grid>
      <Grid item={true} className={classes.contentSpacing}>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </Grid>
    </Grid>
  );
};

export default Post;
