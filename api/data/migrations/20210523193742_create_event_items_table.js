exports.up = function (knex) {
  return knex.schema.createTable("event_items", (tbl) => {
    tbl.increments("event_items_id");
    tbl
      .integer("event_id")
      .unsigned()
      .notNullable()
      .references("event_id")
      .inTable("events")
      .onDelete("CASCADE");
    tbl
      .integer("item_id")
      .unsigned()
      .notNullable()
      .references("item_id")
      .inTable("items")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("event_items");
};
