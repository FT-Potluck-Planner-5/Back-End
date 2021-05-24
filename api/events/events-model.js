const { where } = require("../data/db-config");
const db = require("../data/db-config");

const getAll = () => {
  return db("events as e")
    .select(
      "event_date",
      "event_id",
      "event_location",
      "event_time",
      "event_name",
      "u.username as organizer"
    )
    .join("users as u", "u.user_id", "e.user_id");
};

const getById = (event_id) => {
  return db("events as e")
    .select(
      "event_date",
      "event_id",
      "event_location",
      "event_time",
      "event_name",
      "u.username as organizer"
    )
    .join("users as u", "u.user_id", "e.user_id")
    .where({ event_id });
};

const getByUserId = (user_id) => {
  return db("events as e")
    .select(
      "event_date",
      "event_id",
      "event_location",
      "event_time",
      "event_name",
      "u.username as organizer"
    )
    .join("users as u", "u.user_id", "e.user_id")
    .where("e.user_id", user_id);
};
const getByGuestId = (user_id) => {
  return db("events as e")
    .select(
      "event_date",
      "e.event_id",
      "event_location",
      "event_time",
      "event_name",
      "u.username as guest"
    )
    .join("event_guests as eg", "eg.event_id", "e.event_id")
    .join("users as u", "u.user_id", "eg.user_id")
    .where("eg.user_id", user_id);
};

const getBy = (filter) => {
  return db("events").where(filter);
};

const add = async (event) => {
  const [{ event_id }] = await db("events").insert(event, ["event_id"]);
  return await getById(event_id);
};

module.exports = { getAll, getById, getBy, add, getByGuestId, getByUserId };
