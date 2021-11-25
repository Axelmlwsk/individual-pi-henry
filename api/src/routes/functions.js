const { Country, TouristActivity } = require("../db");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {
  const { name } = req.query;

  if (name) {
    const countries = await Country.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
    });
    if (countries.length === 0) {
      return res.send("Country not found");
    }
    return res.send(countries);
  }

  const countries = await Country.findAll({ include: TouristActivity });
  res.send(countries);
};

const searchById = async (req, res) => {
  let { id } = req.params;
  //traigo el id por params, capitalizo la id para poder buscar tambien en minusculas y retorno el pais.
  const country = await Country.findOne({ where: { ID: id.toUpperCase() }, include: TouristActivity });
  if (!country) {
    return res.sendStatus(404);
  }
  res.send(country);
};

const addActivity = async (req, res) => {
  const { name, difficulty, duration, season, selectedCountries } = req.body;

  //creo la actividad con los datos traidos por el body.
  const activity = await TouristActivity.create({
    name,
    difficulty,
    duration,
    season,
  });

  //por body paso un array con las ID de los paises relacionados con la actividad, lo recorro y agrego cada uno a la actividad.
  for (let i = 0; i < selectedCountries.length; i++) {
    let country = await Country.findOne({ where: { ID: selectedCountries[i] } });
    await activity.addCountry(country);
  }
  res.json(activity);
};

module.exports = {
  addActivity,
  searchById,
  getAllCountries,
};
