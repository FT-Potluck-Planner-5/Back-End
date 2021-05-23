exports.up = async function (knex) {
  await knex.schema.createTable("event_items", (tbl) => {
    tbl.increments("event_items_id");
    tbl.integer("event_id")
      .unsigned()
      .notNullable()
      .references("event_id")
      .inTable("events")
      .onDelete("CASCADE");
      tbl.integer("item_id")
      .unsigned()
      .notNullable()
      .references("item_id")
      .inTable("items")
      .onDelete("CASCADE");
  })
};

exports.down = async function (knex) {
  await knex.raw('drop extension if exists "uuid-ossp"');
  return knex.schema.dropTableIfExists("users");
};
