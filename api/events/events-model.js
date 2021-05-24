const db = require("../data/db-config");

// [GET]: /api/events/:user_id
// [GET]: /api/events/guest/:user_id
// [PUT]: /api/events/:event_id
// [PUT]: /api/events/guests/:event_id

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

// get items and guests in here
const getByUserId = (user_id) => {
  // query to the database
  // getByGuestId -- 
  // all the JS logic to inject items and guests
  // within forloop call getByGuestId - get the items
  
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

// include RSVP / confirmation column
// SELECT events.event_id, events.event_name, event_guests.user_id, users.username, event_guests.response FROM events
// JOIN event_guests ON events.event_id=event_guests.event_id
// JOIN users ON event_guests.user_id=users.user_id
const getAllEventGuests = (event_id) => {
  return db("events as e")
  .select(
    "e.event_id",
    "e.event_name",
    "eg.user_id",
    "eg.response",
    "u.username as guest"
  )
  .join("event_guests as eg", "eg.event_id", "e.event_id")
  .join("users as u", "u.user_id", "eg.user_id")
  .where("e.event_id", event_id);
};

const getBy = (filter) => {
  return db("events").where(filter);
};

const add = async (event) => {
  const [{ event_id }] = await db("events").insert(event, ["event_id"]);
  return await getById(event_id);
};

module.exports = { 
  getAll,
  getById,
  getBy,
  add,
  getByGuestId,
  getAllEventGuests,
  getByUserId
};
