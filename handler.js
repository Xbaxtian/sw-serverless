'use strict';

const { searchPlanet, savePlanet } = require('./src/planets');

module.exports.searchPlanet = async (event, context, callback) => {
  const nameParameter = event.pathParameters.name;
  const results = await searchPlanet(nameParameter);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: 'success',
      data: results,
    }),
  });
};

module.exports.savePlanet = async (event, context, callback) => {
  const results = await savePlanet(JSON.parse(event.body));

  callback(null, {
    statusCode: results.statusCode,
    body: JSON.stringify({
      status: results.status,
      data: results.data,
    }),
  });
};
