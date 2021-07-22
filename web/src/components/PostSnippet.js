import React from 'react';
import Post from './Post';

const PostSnippet = ({ post }) => {
  console.log(post);
  return (
    <>
      <Post post={post} />
    </>
  );
};

export default PostSnippet;
