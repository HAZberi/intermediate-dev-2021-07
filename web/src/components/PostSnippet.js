import React, { useState } from 'react';
import Post from './Post';
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    cursor: 'pointer',
  },
  dividerSpacing: {
    margin: '2em',
  },
  contentSpacing: {
    marginLeft: '2em',
    marginRight: '2em',
  },
}));

const PostSnippet = ({ post }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card elevation={0}>
        <CardContent className={classes.contentSpacing}>
          <Typography
            variant="h3"
            className={classes.cardTitle}
            onClick={() => {
              setOpen(true);
            }}
            gutterBottom={true}
          >
            {post.title}
          </Typography>
          <Typography variant="body1">
            Authored By: {post.author.name}
          </Typography>
          <Typography variant="body1">
            Published On: {new Date(post.publishedAt).toString()}
          </Typography>
        </CardContent>
        <Divider className={classes.dividerSpacing} />
      </Card>
      <Dialog
        open={open}
        style={{ zIndex: 1302 }}
        fullWidth={true}
        maxWidth="lg"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Post post={post} />
      </Dialog>
    </>
  );
};

export default PostSnippet;
