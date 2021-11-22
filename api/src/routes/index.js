const { Router } = require("express");
const { addActivity, searchById, getAllCountries } = require("./functions");
const { Country, TouristActivity } = require("../db");
const router = Router();

router.get("/countries", getAllCountries);

router.get("/countries/:id", searchById);

router.get("/activities", async (req, res) => {
  const activities = await TouristActivity.findAll();
  res.send(activities);
});

router.post("/activity", addActivity);

module.exports = router;
