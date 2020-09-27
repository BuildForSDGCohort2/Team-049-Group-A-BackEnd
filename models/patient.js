"use strict";

const { Model } = require("objection");

class User extends Model {
  // bind your model to the corresponsing migration
  static get tableName() {
    return "patients";
  }

  // Add validation rules for your model
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "user_id",
        "created_by",
        "address",
        "origin",
        "nationality",
        "phone",
        "next_of_kin",
        "next_of_kin_phone",
        "occupation",
        "genotype",
        "blood_group",
        "age",
      ],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        created_by: { type: "integer" },
        address: { type: "string", minLength: 1, maxLength: 255 },
        origin: { type: "string", minLength: 1, maxLength: 255 },
        nationality: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 11, maxLength: 11 },
        next_of_kin: { type: "string", minLength: 1, maxLength: 255 },
        next_of_kin_phone: { type: "string", minLength: 11, maxLength: 11 },
        occupation: { type: "string", minLength: 1, maxLength: 255 },
        genotype: { type: "string", minLength: 1, maxLength: 255 },
        blood_group: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Patient;
