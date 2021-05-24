const Events = require("./events-model");

const eventsController = {
  async getAll(req, res) {
    res.status(200).json(await Events.getAll());
  },
  async getByOwner(req, res) {
    const user_id = req.params.user_id;
    res.status(200).json(await Events.getByUserId(user_id));
  },
  async getByGuest(req, res) {
    const user_id = req.params.user_id;
    res.status(200).json(await Events.getByGuestId(user_id));
  },
  async getById(req, res) {
    const event_id = req.params.event_id;
    res.status(200).json(await Events.getById(event_id));
  },
  async addEvent(req, res) {
    res.status(201).json(await Events.add(req.body));
  },
};

module.exports = eventsController;
