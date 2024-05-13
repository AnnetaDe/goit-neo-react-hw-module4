import axios from 'axios';

const accsesKey = '1rnCtiCu4AS1eOzmxuvYJB3d827NfWqFc_VdIZRFoc8';
// const secretKey = 'X7eWc_JuF4ExeVhfNAYjdphbE0GxFgf0bKOaqlflbos';
// const applicationID = '599464';
// const UNSPLASH_ROOT = 'https://api.unsplash.com/search/photos';
// const per_page = 13;
axios.defaults.baseURL = 'https://api.unsplash.com';

// export const fetchArticles = async configParam => {
//   const { data } = await axios.get('search/photos', {
//     params: {
//       client_id: accsesKey,
//       query: 'searchQuery',
//       ...configParam,
//     },
//   });
//   return data;
// };

export const fetchArticlesByQuery = async configParam => {
  const { data } = await axios.get('search/photos', {
    params: {
      page: 1,
      client_id: accsesKey,
      // query: 'searchQuery',
      ...configParam,
    },
  });
  return data;
};
