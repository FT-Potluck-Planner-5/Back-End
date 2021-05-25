const Events = require("./events-model");

const eventsController = {
  async getAll(req, res) {
    res.status(200).json(await Events.getAll());
  },
  // do we need a constraint here for admin/owner?
  async getByOwner(req, res) {
    const user_id = req.params.user_id;
    res.status(200).json(await Events.getByOwnerId(user_id));
  },
  async getByGuest(req, res) {
    const user_id = req.params.user_id;
    res.status(200).json(await Events.getByGuestId(user_id));
  },
  async getById(req, res) {
    const event_id = req.params.event_id;
    res.status(200).json(await Events.getById(event_id));
  },
  async getEventGuests(req, res) {
    const event_id = req.params.event_id;
    res.status(200).json(await Events.getAllEventGuests(event_id));
  },
  async addEvent(req, res) {
    res.status(201).json(await Events.add(req.body));
  },
  async addAGuest(req, res) {
    res.status(201).json(await Events.addGuest(req.params.event_id, req.body.guest_id));
  }
};

module.exports = eventsController;
