'use strict';

function createFromEnglish ({
  name,
  diameter,
  rotation_period,
  orbital_period,
  gravity,
  population,
  climate,
  terrain,
  surface_water,
  residents,
  films,
  url,
  created = Date.now(),
  edited = Date.now(),
} = {}) {
  return {
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

module.exports = Object.freeze({
  createFromEnglish,
});
