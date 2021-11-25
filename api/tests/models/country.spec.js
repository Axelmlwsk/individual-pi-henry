const { Country, db } = require("../../src/db.js");
const { expect } = require("chai");

describe("Model: Country", () => {
  before(() =>
    db.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("validations", () => {
    beforeEach(() => Country.sync({ force: false }));

    it("should throw an error if ID has no length of 3", (done) => {
      Country.create({
        ID: "ARGE",
        name: "argentina",
        img: "prueba.jpg",
        continent: "America",
        capital: "Buenos Aires",
        subregion: "Latin America",
        area: "5000",
        population: "500000",
      })
        .then(() => done(new Error("It requires a valid ID")))
        .catch(() => done());
    });
    it("should throw error if no name is passed", () => {
      Country.create({ ID: "ARG", name: "", img: "prueba.jpg", continent: "America", capital: "Buenos Aires", subregion: "Latin America", area: "5000", population: "500000" })
        .then(() => done(new Error("It requires a valid ID")))
        .catch(() => done());
    });
  });
});
