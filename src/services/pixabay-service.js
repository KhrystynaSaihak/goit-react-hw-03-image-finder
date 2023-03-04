import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '2783286-0a3dbea03ea42b414ebcbec50';

export const getImgCollection = async (query, page) => {
  const options = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };

  const { data } = await axios.get('/api', { params: options });

  return data;
};
