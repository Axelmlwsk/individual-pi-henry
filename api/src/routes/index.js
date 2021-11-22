const { Router } = require("express");
const { addActivity, searchById, getAllCountries } = require("./functions");

const router = Router();

router.get("/countries", getAllCountries);

router.get("/countries/:id", searchById);

router.post("/activity", addActivity);

module.exports = router;
