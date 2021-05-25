const eventsController = require("./events-controller");
const { bodyValidation } = require("./events-middleware");

const router = require("express").Router();

// [PUT]: /api/events/:event_id - edit specific event
// [PUT]: /api/events/guests/:event_id - edit guests in event?

router.get("/", eventsController.getAll);

router.get("/:event_id", eventsController.getById);

router.get("/:event_id/guests", eventsController.getEventGuests);

router.get("/organizer/:user_id", eventsController.getByOwner);

router.get("/guest/:user_id", eventsController.getByGuest);

router.post("/", bodyValidation, eventsController.addEvent);

module.exports = router;
