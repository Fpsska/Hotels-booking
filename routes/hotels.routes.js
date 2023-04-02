const { Router } = require("express");

const router = new Router();
const hotelsController = require("../controllers/hotels.controller");

router.get("/", hotelsController.getHotelsData);

module.exports = router;
