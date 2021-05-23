const db = require("../data/db-config");

const getAll = () => {
  return db("events");
};

const getById = (user_id) => {
  return db("events").where({ user_id });
};

const getBy = (filter) => {
  return db("events").where(filter);
};

const add = async (event) => {
  const [event_id] = await db("events").insert(event);
  return await getById(event_id);
};

module.exports = { getAll, getById, getBy, add };
