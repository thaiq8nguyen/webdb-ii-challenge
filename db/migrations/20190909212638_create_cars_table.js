exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .string("vin")
      .unique()
      .notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table
      .integer("mileage")
      .notNullable()
      .defaultTo(0);
    table.string("transmission_type").defaultTo("automatic");
    table.string("title_status").defaultTo("clean");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
