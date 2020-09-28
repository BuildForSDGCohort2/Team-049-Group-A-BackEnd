let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("doctors", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().unique().notNullable();
    table.integer("verified_by").unsigned().nullable();
    table.string("hospital", 255).notNullable();
    table.string("address", 255).notNullable();
    table.string("specialization", 255).notNullable();
    table.string("license_number", 255).unique().notNullable();
    table.string("gender", 10).notNullable();
    table.string("alt_email", 255).unique().nullable();
    table.string("alt_phone", 255).unique().nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("verified_by").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("doctors");
};
