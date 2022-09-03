import env from 'react-dotenv';

const getInfomationsApi = async (searchValue) => {
  const url = `https://core.ac.uk:443/api-v2/search/${searchValue}?page=1&pageSize=10&apiKey=${env.API_KEY}`;
  const request = await fetch(url);
  const { data } = await request.json();
  return data;
};

export default getInfomationsApi;
