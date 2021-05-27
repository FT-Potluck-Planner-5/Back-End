const eventsController = require("./events-controller");
const {
  bodyValidation,
  restriction,
  only,
  checkUserId,
} = require("./events-middleware");

const router = require("express").Router();

router.get("/", restriction, eventsController.getAll);

router.get("/:event_id", restriction, eventsController.getById);

router.get("/:event_id/guests", eventsController.getEventGuests);

router.get(
  "/organizer/:user_id",
  restriction,
  checkUserId,
  only,
  eventsController.getByOwner
);

router.get(
  "/guest/:user_id",
  restriction,
  checkUserId,
  only,
  eventsController.getByGuest
);

router.post("/", restriction, bodyValidation, eventsController.addEvent);

router.post("/:event_id/guests", eventsController.addAGuest);

router.post("/:event_id/items", eventsController.addAItem);

router.put("/:event_id", eventsController.editAnEvent);

router.put("/:event_id/guests", eventsController.editAResponse);

router.put("/:event_id/items", eventsController.editTheItems);

router.delete("/:event_id", eventsController.deleteAnEvent);

router.delete("/:event_id/items", eventsController.deleteAnItem);

router.delete("/:event_id/guests", eventsController.deleteAGuest);

module.exports = router;
