import { uniqBy } from 'lodash';

const findUniqueAuthors = (posts) => {
  const allPostsAuthors = posts.map((post) => post.author);
  const uniqueAuthors = uniqBy(allPostsAuthors, 'id');
  return uniqueAuthors;
};

export default findUniqueAuthors;
