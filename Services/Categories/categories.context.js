import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from 'react';

import {catMock} from './categoryListMock';

export const CategoryContext = createContext();

export const CategoryContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  const value = useMemo(() => ({categories, setCategories}), [categories]);

  const retrieveCategories = () => {
    setCategories(catMock);
    console.log('Category Data Retrieved!');
  };

  useEffect(() => {
    retrieveCategories();
    // console.log('cat data : ' + categories);
  }, []);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
