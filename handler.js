'use strict';

const { searchPlanet } = require('./src/planets');

module.exports.searchPlanet = async (event, context, callback) => {
  const results = await searchPlanet(event.name);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: 'success',
      results,
    }),
  });
};
