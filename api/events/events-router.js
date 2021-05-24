const eventsController = require("./events-controller");
const { bodyValidation, restriction, only } = require("./events-middleware");

const router = require("express").Router();

router.get("/", restriction, eventsController.getAll);

router.get("/:event_id", restriction, eventsController.getById);

router.get(
  "/organizer/:user_id",
  restriction,
  only,
  eventsController.getByOwner
);

router.get("/guest/:user_id", restriction, eventsController.getByGuest);

router.post("/", restriction, bodyValidation, eventsController.addEvent);

module.exports = router;
