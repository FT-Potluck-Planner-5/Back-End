exports.up = async function (knex) {
  await knex.schema.createTable("event_guests", (tbl) => {
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

exports.down = async function (knex) {
  await knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTableIfExists("users");
};
