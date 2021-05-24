const events = [
  {
    event_name: "George's Graduation",
    event_date: "07/06/20never",
    event_time: "9AM",
    event_location: "Disney World",
    user_id: "39c1471d-b4ac-4935-962d-836f01abe3d8",
  },
  {
    event_name: "Daniel's Bachelor Party",
    event_date: "07/06/20never",
    event_time: "10PM",
    event_location: "Las Vegas",
    user_id: "39c1471d-b4ac-4935-962d-836f01abe3d8",
  },
  {
    event_name: "Group 5 buildweek partayy",
    event_date: "05/28/21",
    event_time: "5PM",
    event_location: "Online",
    user_id: "39c1471d-b4ac-4935-962d-836f01abe3d8",
  },
];

exports.seed = function (knex) {
  return knex("events").insert(events);
};
