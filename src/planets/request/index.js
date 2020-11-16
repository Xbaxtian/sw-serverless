const axios = require('axios');

const client = axios.create({
  baseURL: 'https://swapi.py4e.com/api/planets',
});

async function findPlantByName(name) {
  const { data } = await client.get('', {
    params: {
      search: name,
    }
  });

  return data;
}

module.exports = Object.freeze({
  findPlantByName,
});
