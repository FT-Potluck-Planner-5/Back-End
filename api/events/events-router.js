const eventsController = require("./events-controller");
const {
  bodyValidation,
  restriction,
  only,
  checkUserId,
  checkEventId,
} = require("./events-middleware");

const router = require("express").Router();

router.get("/", eventsController.getAll);

router.get("/:event_id", eventsController.getById);

router.get("/:event_id/guests", eventsController.getEventGuests);

router.get(
  "/organizer/:user_id",
  checkUserId,
  only,
  eventsController.getByOwner
);

router.get("/guest/:user_id", checkUserId, only, eventsController.getByGuest);

router.post("/", restriction, bodyValidation, eventsController.addEvent);

router.post("/:event_id/guests", checkEventId, eventsController.addAGuest);

router.post("/:event_id/items", checkEventId, eventsController.addAItem);

router.put("/:event_id", checkEventId, eventsController.editAnEvent);

router.put("/:event_id/guests", checkEventId, eventsController.editAResponse);

router.put("/:event_id/items", checkEventId, eventsController.editTheItems);

router.delete("/:event_id", checkEventId, eventsController.deleteAnEvent);

router.delete("/:event_id/items", checkEventId, eventsController.deleteAnItem);

router.delete("/:event_id/guests", checkEventId, eventsController.deleteAGuest);

module.exports = router;
