const eventsController = require("./events-controller");
const { bodyValidation, restriction, only } = require("./events-middleware");

const router = require("express").Router();

router.get("/", restriction, eventsController.getAll);

router.get("/:event_id", restriction, eventsController.getById);

router.get("/:event_id/guests", eventsController.getEventGuests);

router.get(
  "/organizer/:user_id",
  restriction,
  only,
  eventsController.getByOwner
);

router.get("/guest/:user_id", only, restriction, eventsController.getByGuest);

router.post("/", restriction, bodyValidation, eventsController.addEvent);

router.post("/:event_id/guests", eventsController.addAGuest);

router.post("/:event_id/items", eventsController.addAItem);

router.put("/:event_id", eventsController.editAnEvent);

// [PUT]: /api/events/guests/:event_id - edit guests in event? // changing response if you're guest
router.put("/:event_id/guests", eventsController.editAResponse);

// [PUT]: edit items in event
router.put("/:event_id/items", eventsController.editTheItems); // responsibleFor

// [DELETE]: EVENTS /api/events EVENT
router.delete("/:event_id", eventsController.deleteAnEvent); // can combine the logic
// [DELETE]: ITEMS /api/events/:event_id
router.delete("/:event_id/items", eventsController.deleteAnItem); // can combine the logic
// [DELETE]: GUESTS uninvite? GUEST -- middleware to check if restricted to organizer
router.delete("/:event_id/guests", eventsController.deleteAGuest);

module.exports = router;
