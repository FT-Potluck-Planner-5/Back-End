// const Events = require("./events-model");
const jwt = require("jsonwebtoken");
// const db = require("../data/db-config");
const Users = require("../auth/auth-model");
const { eventSchema } = require("../schemaValidation");
const JWT_SECRET = require("../secrets");

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

const restriction = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      next({ status: 401, message: "Token authentication error" });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

const only = (req, res, next) => {
  if (req.decoded.subject === req.params.user_id) next();
  else
    next({ status: 403, message: "You are not allowed access to this data" });
};

const checkUserId = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    await Users.findBy(user_id);

    next();
  } catch (err) {
    next({ status: 400, message: "user ID does not exist!" });
  }
};
module.exports = { bodyValidation, restriction, only, checkUserId };
