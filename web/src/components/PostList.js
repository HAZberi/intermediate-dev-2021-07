import React from 'react';
import PostSnippet from './PostSnippet';
import sortPosts from '../helpers/sortPosts';
import filterByAuthor from '../helpers/filterByAuthor';

const PostList = ({ posts, authorId }) => {
  const revChronoSortedPosts = authorId
    ? sortPosts(filterByAuthor(posts, authorId))
    : sortPosts(posts);
  return (
    <>
      {revChronoSortedPosts.map((post) => (
        <PostSnippet key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
