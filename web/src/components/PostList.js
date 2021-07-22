import React from 'react';
import PostSnippet from './PostSnippet';

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostSnippet key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
