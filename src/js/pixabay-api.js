import axios from 'axios';

const BASE_KEY = '44168245-b85e0b025332670cfa54a187d';
const BASE_URL = 'https://pixabay.com/api/';

export default function pixabayGetData(query){
  const params = {
    key: BASE_KEY,
    q:query,
    'image_type':'photo',
    orientation:'horizontal',
    safesearch:true,
  }

  return axios.get(`${BASE_URL}`, {params}).then(response => response.data.hits);
}