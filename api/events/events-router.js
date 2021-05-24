const eventsController = require("./events-controller");
const { bodyValidation } = require("./events-middleware");

const router = require("express").Router();

router.get("/", eventsController.getAll);

router.get("/:event_id", eventsController.getById);

router.get("/:event_id/guests", eventsController.getEventGuests);

// router.get("/:event_id/items", eventsController.getById); // new - needed?

router.get("/organizer/:user_id", eventsController.getByOwner);

router.get("/guest/:user_id", eventsController.getByGuest);

router.post("/", bodyValidation, eventsController.addEvent);

module.exports = router;
