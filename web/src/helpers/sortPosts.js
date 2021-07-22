const sortPosts = (posts) => {
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB - dateA;
  });
  return sortedPosts;
};

export default sortPosts;
