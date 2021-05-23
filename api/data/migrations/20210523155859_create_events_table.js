exports.up = async function (knex) {
  await knex.schema.createTable("events", (tbl) => {
    tbl.increments("events_id");
    tbl.string("event_name", 128).notNullable().unique();
    tbl.string("event_date", 128).notNullable();
    tbl.string("event_time", 128).notNullable();
    tbl.string("event_location", 128).notNullable();
    tbl.integer("owner_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("events"); 
};