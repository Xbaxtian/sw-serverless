const { test, expect } = require('@jest/globals');
const planetFactory = require('../../src/planets/factory');
const planetApi = require('../../src/planets/request');

describe('Planets test suite', () => {
  test('Create planet from object', () => {
    const moc_object = {
      name           : 'Tatooine',
      diameter       : '10465',
      rotation_period: '23',
      orbital_period : '304',
      gravity        : '1',
      population     : '120000',
      climate        : 'Arid',
      terrain        : 'Dessert',
      surface_water  : '1',
      residents      : ['https://swapi.py4e.com/api/people/1/'],
      films          : ['https://swapi.py4e.com/api/films/1/'],
      url            : 'https://swapi.py4e.com/api/planets/1/',
      created        : '2014-12-09T13:50:49.641000Z',
      edited         : '2014-12-15T13:48:16.167217Z',
    };

    const planet = planetFactory.createFromEnglish(moc_object);

    expect(planet).toMatchObject({
      id              : null,
      nombre          : 'Tatooine',
      diametro        : '10465',
      periodo_rotacion: '23',
      periodo_orbita  : '304',
      gravedad        : '1',
      poblacion       : '120000',
      clima           : 'Arid',
      terreno         : 'Dessert',
      superficie_agua : '1',
      residentes      : ['https://swapi.py4e.com/api/people/1/'],
      peliculas       : ['https://swapi.py4e.com/api/films/1/'],
      url             : 'https://swapi.py4e.com/api/planets/1/',
      creado          : '2014-12-09T13:50:49.641000Z',
      editado         : '2014-12-15T13:48:16.167217Z',
    })
  });

  test('Create planet from DTO', () => {
    const moc_object = {
      nombre          : 'Tatooine',
      diametro        : '10465',
      periodo_rotacion: '23',
      periodo_orbita  : '304',
      gravedad        : '1',
      poblacion       : '120000',
      clima           : 'Arid',
      terreno         : 'Dessert',
      superficie_agua : '1',
    };

    const planet = planetFactory.createFromDTO(moc_object);

    expect(planet).toMatchObject({
      id              : expect.any(String),
      nombre          : 'Tatooine',
      diametro        : '10465',
      periodo_rotacion: '23',
      periodo_orbita  : '304',
      gravedad        : '1',
      poblacion       : '120000',
      clima           : 'Arid',
      terreno         : 'Dessert',
      superficie_agua : '1',
      residentes      : null,
      peliculas       : null,
      url             : null,
      creado          : expect.any(String),
      editado         : expect.any(String),
    })
  });

  test('Get planets from API', async () =>{
    const moc_name = 'tatoo';

    const response = await planetApi.findPlantByName(moc_name);

    expect(response.count).toEqual(expect.any(Number));
    expect(response.results).toEqual(expect.any(Array));
  });
});