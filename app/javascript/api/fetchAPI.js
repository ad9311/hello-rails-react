const fetchAPI = async () => {
  const URL = 'http://127.0.0.1:3000/api/v1/messages';
  const request = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  const response = await request.json();
  return response;
};

export default fetchAPI;
