// const Events = require("./events-model");
const { eventSchema } = require("../schemaValidation");

const bodyValidation = async (req, res, next) => {
  try {
    req.body = await eventSchema.validate(req.body, {
      stripUnknown: true,
    });
    next();
  } catch (err) {
    next({ status: 400, message: err.message });
  }
};

module.exports = { bodyValidation };
