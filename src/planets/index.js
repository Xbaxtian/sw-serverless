const swApiClient = require('./request');
const planetFactory = require('./factory');
const planetRepository = require('./repository');

async function searchPlanet(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const dbResults = await planetRepository.findByName(capitalizedName);  
  if (dbResults && dbResults.length) {
    return dbResults;
  }

  const apiData = await swApiClient.findPlantByName(name);

  return apiData.results.map(planetFactory.createFromEnglish);
}

async function savePlanet(planetDTO) {
  try {
    const planet = planetFactory.createFromDTO(planetDTO);
    await planetRepository.save(planet);

    return {
      statusCode: 201,
      status: 'success',
      data: planet,
    }
  } catch (error) {
    return {
      statusCode: 404,
      status: 'error',
      data: error.message
    }
  }
}

module.exports = Object.freeze({
  searchPlanet,
  savePlanet,
})