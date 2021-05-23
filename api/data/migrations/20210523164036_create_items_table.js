exports.up = async function (knex) {
  await knex.schema.createTable("items", (tbl) => {
    tbl.increments("item_id");
    tbl.string("item_name").notNullable();  
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("items"); 
};

