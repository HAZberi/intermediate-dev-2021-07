import React, { useState, useEffect } from 'react';
import localApi from './api/localApi';
import AuthorList from './components/AuthorList';
import PostList from './components/PostList';
import Loading from './components/Loading';
import Error from './components/Error';
import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBackground: {
    backgroundColor: theme.palette.common.whitesmoke,
    width: '100%',
    height: '100%',
  },
  postContainer: {
    marginBottom: '3vh',
    marginTop: '3vh',
    height: '94vh',
    width: '100%',
    overflowY: 'scroll',
    borderRadius: '10px',
  },
  authorContainer: {
    marginTop: '3vh',
    marginBottom: '3vh',
    width: '100%',
  },
  allPosts: {
    marginTop: '3vh',
    marginBottom: '3vh',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [selectedAuthorID, setSelectedAuthorID] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPostData = async () => {
    setLoading(true);
    try {
      const response = await localApi.get('/posts');
      const { data } = response;
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Grid container={true} className={classes.appBackground} spacing={2}>
      <Grid item={true} xs={8}>
        <Paper
          variant="elevation"
          elevation={2}
          className={classes.postContainer}
        >
          <PostList posts={posts} authorId={selectedAuthorID} />
        </Paper>
      </Grid>
      <Grid container={true} direction="column" item={true} xs={4}>
        <Grid item={true}>
          <Paper
            variant="elevation"
            elevation={2}
            className={classes.authorContainer}
          >
            <AuthorList posts={posts} setAuthorId={setSelectedAuthorID} />
          </Paper>
        </Grid>
        <Grid item={true}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.allPosts}
            onClick={() => setSelectedAuthorID('')}
          >
            See All Posts
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
