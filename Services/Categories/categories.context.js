import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from 'react';

import {catMock} from './CategoryListMock';

export const CategoryContext = createContext();

export const CategoryContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const setCategoriesHandler = cat => {
    setCategories(cat);
  };
  useEffect(() => {
    // console.log(...catMock);
    setCategories(...catMock);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategoriesHandler,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
