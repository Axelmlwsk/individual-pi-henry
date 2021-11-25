const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, db } = require("../../src/db.js");
const agent = session(app);

describe("Country routes", () => {
  before(() =>
    db.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Country.sync({ force: false }).then(() => Country.findAll({ name: "argentina" })));
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
    it("should return a json", () => agent.get("/countries").expect("Content-Type", /application\/json/));
    it("should return 404 if country doesnt exist", () => agent.get("/countries/ARGE").expect(404));
  });
});
