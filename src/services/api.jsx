import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'c6b09f6138f2319bb321b6582d75caa8',
  include_adult: false,
};

export const fetchTrending = async () => {
  const { data } = await axios.get(`trending/all/day?`);
  return data.results;
};