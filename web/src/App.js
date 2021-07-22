import React, { useState, useEffect } from 'react';
import localApi from './api/localApi';
import AuthorList from './components/AuthorList';
import PostList from './components/PostList';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);
  const [selectedAuthorID, setSelectedAuthorID] = useState('');

  const getPostData = async () => {
    try {
      const response = await localApi.get('/posts');
      const { data } = response;
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <PostList posts={posts} authorId={selectedAuthorID} />
      <AuthorList posts={posts} setAuthorId={setSelectedAuthorID} />
    </>
  );
};

export default App;
