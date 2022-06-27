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

  const retrieveCategories = () => {
    setCategories(catMock);
    console.log('Category Data Retrieved!');
  };
  useEffect(() => {
    setCategories(catMock);
    console.log('cat data : ' + categories);
  });

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
