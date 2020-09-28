let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("history", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().unique().notNullable();
    table.integer("created_by").unsigned().unique().notNullable();
    table.string("diagnosis", 255).notNullable();
    table.string("medication", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("created_by").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("history");
};
