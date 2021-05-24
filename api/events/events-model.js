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

const getByUserId = async (user_id) => {
  // get items and guests in here
  // query to the database
  // getByGuestId -- 
  // all the JS logic to inject items and guests
  // within forloop call getByGuestId - get the items

  // second query to get all the event_items from specific user

  const events = await db("events as e")
    .select(
      "e.event_date",
      "e.event_id",
      "e.event_location",
      "e.event_time",
      "e.event_name",
      "u.username as organizer",
      // "ei.item_name as items"
    )
    // .join("event_items as ei", "ei.user_id", "e.owner_id")
    .join("users as u", "u.user_id", "e.owner_id")
    .where("e.owner_id", user_id);
    // console.log(query);
    // console.log(query);
    const items = (event_id) => {
      return db("event_items as ei")
        .select(
          "ei.item_name",
          "ei.user_id as responsible_for"
        )
        .where("ei.event_id", event_id);    
    };

    for (let event of events) {
      const itemsList = await items(event.event_id);
      event.items = await itemsList;
    }


    return events;
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
      .join("users as u", "u.user_id", "eg.guest_id")
      .where("eg.guest_id", user_id);
  };

// feel like a simple call to get items might be better
// const getEventItems = (event_id) => {

// };

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

module.exports = { 
  getAll,
  getById,
  getBy,
  add,
  getByGuestId,
  getAllEventGuests,
  getByUserId
};
