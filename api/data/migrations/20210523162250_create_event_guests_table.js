exports.up = function (knex) {
  return knex.schema.createTable("event_guests", (tbl) => {
    tbl.increments("event_guests_id");
    tbl.integer("event_id")
      .unsigned()
      .notNullable()
      .references("event_id")
      .inTable("events")
      .onDelete("CASCADE");
      tbl.integer("guest_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE");
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("event_guests"); 
};
