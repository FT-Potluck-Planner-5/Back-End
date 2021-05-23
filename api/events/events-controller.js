const Events = require("./events-model");

const eventsController = {
  async getAll(req, res) {
    res.status(200).json(await Events.getAll());
  },
};

module.exports = eventsController;
