"use strict";

const { Model } = require("objection");

class User extends Model {
  // bind your model to the corresponsing migration
  static get tableName() {
    return "doctors";
  }

  // Add validation rules for your model
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "user_id",
        "verified_by",
        "hospital",
        "address",
        "specialization",
        "license_number",
        "gender",
        "alt_email",
        "alt_phone",
      ],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        verified_by: { type: "integer" },
        hospital: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        specialization: { type: "string", minLength: 1, maxLength: 255 },
        license_number: { type: "string", minLength: 1, maxLength: 255 },
        gender: { type: "string", minLength: 1, maxLength: 255 },
        alt_email: { type: "string", minLength: 3, maxLength: 255 },
        alt_phone: { type: "string", minLength: 11, maxLength: 11 },
      },
    };
  }
}

module.exports = Doctor;
