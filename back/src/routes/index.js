const { Router } = require("express");
const { getAllMovies, getWelcome } = require("../controllers");

const router = Router();

router.get("/", getWelcome);

router.get("/movies", getAllMovies);

module.exports = router;
