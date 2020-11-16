const swApiClient = require('./request');
const planetFactory = require('./factory');

async function searchPlanet(name) {
  const apiData = await swApiClient.findPlantByName(name);

  return apiData.results.map(planetFactory.createFromEnglish);
}

module.exports = Object.freeze({
  searchPlanet,
})