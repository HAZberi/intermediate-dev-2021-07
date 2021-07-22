import React from 'react';
import findUniqueAuthors from '../helpers/findUniqueAuthors';

const AuthorList = ({ posts, setAuthorId }) => {
  const uniqueAuthors = findUniqueAuthors(posts);
  console.log(uniqueAuthors);

  //   useEffect(() => {
  //     setAuthorId('2cab326a-ab2f-4624-a6d7-2e1855fc5e4e');
  //   }, [setAuthorId]);
  return (
    <>
      <div>{`AuthorList`}</div>
    </>
  );
};

export default AuthorList;
