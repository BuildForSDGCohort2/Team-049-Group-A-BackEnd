"use strict";

const { Model } = require("objection");

class User extends Model {
  // bind your model to the corresponsing migration
  static get tableName() {
    return "history";
  }

  // Add validation rules for your model
  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "created_by", "diagnosis", "medication"],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        created_by: { type: "integer" },
        diagnosis: { type: "string", minLength: 1, maxLength: 255 },
        medication: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = History;
