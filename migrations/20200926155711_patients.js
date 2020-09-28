let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("patients", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().unique().notNullable();
    table.integer("created_by").unsigned().notNullable();
    table.string("address", 255).notNullable();
    table.string("origin", 255).notNullable();
    table.string("nationality", 255).notNullable();
    table.string("phone", 255).unique().nullable();
    table.string("next_of_kin", 255).notNullable();
    table.string("next_of_kin_phone", 255).unique().notNullable();
    table.string("occupation", 255).notNullable();
    table.string("genotype", 255).nullable();
    table.string("blood_group", 255).nullable();
    table.string("age", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("created_by").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("patients");
};
