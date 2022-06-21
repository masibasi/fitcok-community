// import camelize from 'camelize';

import catMock from './CategoryListMock';

export const categoryRequest = () => {
  return new Promise((resolve, reject) => {
    const categoryMock = catMock['data'];
    if (!catMock) {
      reject('not found');
    }
    resolve(categoryMock);
  });
};
