'use strict';
const { v4: uuidv4 } = require('uuid');

function createFromEnglish ({
  name = null,
  diameter = null,
  rotation_period  = null,
  orbital_period  = null,
  gravity  = null,
  population  = null,
  climate  = null,
  terrain  = null,
  surface_water  = null,
  residents  = null,
  films  = null,
  url  = null,
  created = new Date().toISOString(),
  edited = new Date().toISOString(),
} = {}) {
  return {
    id: null,
    nombre: name,
    diametro: diameter,
    periodo_rotacion: rotation_period,
    periodo_orbita: orbital_period,
    gravedad: gravity,
    poblacion: population,
    clima: climate,
    terreno: terrain,
    superficie_agua: surface_water,
    residentes: residents,
    peliculas: films,
    url: url,
    creado: created,
    editado: edited,
  };
}

function createFromDTO ({
  nombre = null,
  diametro = null,
  periodo_rotacion = null,
  periodo_orbita = null,
  gravedad = null,
  poblacion = null,
  clima = null,
  terreno = null,
  superficie_agua = null,
  residentes = null,
  peliculas = null,
  url = null,
  creado = new Date().toISOString(),
  editado = new Date().toISOString(),
} = {}) {
  if (!nombre || !gravedad || !terreno) {
    throw new Error('Not enought data for create planet');
  }

  return {
    id: uuidv4(),
    nombre,
    diametro,
    periodo_rotacion,
    periodo_orbita,
    gravedad,
    poblacion,
    clima,
    terreno,
    superficie_agua,
    residentes,
    peliculas,
    url,
    creado,
    editado,
  };
};

module.exports = Object.freeze({
  createFromEnglish,
  createFromDTO,
});
