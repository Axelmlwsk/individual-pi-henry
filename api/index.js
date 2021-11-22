//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { db } = require("./src/db.js");
const axios = require("axios");
const { Country } = require("./src/db");
// Syncing all the models at once.
db.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const countries = await axios.get("https://restcountries.com/v3/all");
    countries.data.forEach(async (country) => {
      try {
        await Country.create({
          ID: country.cca3,
          name: country.name["common"].toLowerCase(),
          img: country.flags[0],
          continent: country.region,
          capital: country.capital ? country.capital[0] : "Without Capital",
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        });
      } catch (error) {
        console.log(error);
      }
    });
    console.log("server listening at 3001"); // eslint-disable-line no-console
  });
});
