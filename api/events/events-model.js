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
    .join("users as u", "u.user_id", "e.owner_id");
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
    .join("users as u", "u.user_id", "e.owner_id")
    .where({ event_id });
};

  const getByOwnerId = async (user_id) => {
    const result = await db("events as e")
      .select(
        "event_date",
        "event_id",
        "event_location",
        "event_time",
        "event_name",
        "u.username as organizer"
      )
      .join("users as u", "u.user_id", "e.owner_id")
      .where("e.owner_id", user_id);

    for (let event of result) {
      const guestsList = await guests(event.event_id);
      const itemsList = await items(event.event_id);
      event.items = itemsList;
      event.guests = guestsList;
    }

    return result;
  };
  
const getByGuestId = async (user_id) => {

  // push itemsList and guestsList for events for non-admin users

  const result = await db("events as e")
    .select(
      "event_date",
      "e.event_id",
      "event_location",
      "event_time",
      "event_name",
      "u.username as guest"
    )
    .join("event_guests as eg", "eg.event_id", "e.event_id")
    .join("users as u", "u.user_id", "eg.guest_id")
    .where("eg.guest_id", user_id);

    for (let event of result) {
      const guestsList = await guests(event.event_id);
      const itemsList = await items(event.event_id);
      event.items = itemsList;
      event.guests = guestsList;

      console.log(guestsList, itemsList);
    }

    return result;
};

const getAllEventGuests = (event_id) => {
  return db("events as e")
  .select(
    "e.event_id",
    "e.event_name",
    "eg.guest_id",
    "eg.response",
    "u.username as guest",
    "ei.item_name"
  )
  .join("event_guests as eg", "eg.event_id", "e.event_id")
  .join("users as u", "u.user_id", "eg.guest_id")
  .where("e.event_id", event_id);
};

const getBy = (filter) => {
  return db("events").where(filter);
};

const add = async (event) => {
  const [{ event_id }] = await db("events").insert(event, ["event_id"]);
  return await getById(event_id);
};

const items = (event_id) => {
  return db("event_items as ei")
    .select("ei.item_name", "u.username as responsible_for")
    .leftJoin("users as u", "ei.user_id", "u.user_id")
    .where("ei.event_id", event_id);
};

const guests = (event_id) => {
  return db("event_guests as eg")
    .select("u.username", "eg.response")
    .join("users as u", "u.user_id", "eg.guest_id")
    .where("eg.event_id", event_id);
};

module.exports = { 
  getAll,
  getById,
  getBy,
  add,
  getByGuestId,
  getAllEventGuests,
  getByOwnerId
};
