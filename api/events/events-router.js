const eventsController = require("./events-controller");
const { bodyValidation } = require("./events-middleware");

const router = require("express").Router();

router.get("/", bodyValidation, eventsController.getAll);

module.exports = router;
