const filterByAuthor = (posts, authorID) => {
  const filteredPosts = posts.filter((post) => post.author.id === authorID);
  return filteredPosts;
};

export default filterByAuthor;
