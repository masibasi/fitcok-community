import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from 'react';

import {mocks} from './postMock';

export const PostContext = createContext();

export const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState([]);

  const retrievePosts = () => {
    setPosts(mocks);
    console.log('Post data retrieved!');
  };
  useEffect(() => {
    retrievePosts();
  }, []);
  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
      }}>
      {children}
    </PostContext.Provider>
  );
};
