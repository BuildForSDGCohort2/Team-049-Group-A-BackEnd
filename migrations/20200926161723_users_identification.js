let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("users_identification", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().unique().notNullable();
    table.string("id_type", 255).notNullable();
    table.string("id_code", 255).unique().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users_identification");
};
