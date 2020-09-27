"use strict";

const { Model } = require("objection");

class User extends Model {
  // bind your model to the corresponsing migration
  static get tableName() {
    return "users_identification";
  }

  // Add validation rules for your model
  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "id_type", "id_code"],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        id_type: { type: "string", minLength: 1, maxLength: 255 },
        id_code: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = UserID;
