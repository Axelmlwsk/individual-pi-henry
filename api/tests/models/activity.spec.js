const { db, TouristActivity } = require("../../src/db.js");
const { expect } = require("chai");

describe("Model: Tourist Activity", () => {
  before(() =>
    db.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("validations", () => {
    beforeEach(() => TouristActivity.sync({ force: false }));

    it("should throw an error if season is not allowed", (done) => {
      TouristActivity.create({
        id: "1",
        name: "skiar",
        difficulty: "3",
        duration: 20,
        season: "incorrect season",
      })
        .then(() => done(new Error("It requires a valid season")))
        .catch(() => done());
    });
    it("should throw error if difficulty is more than 5", () => {
      TouristActivity.create({ id: "1", name: "skiar", difficulty: "7", duration: 20, season: "Summer" })
        .then(() => done(new Error("it require a difficulty between 1 and 5")))
        .catch(() => done());
    });
  });
});
