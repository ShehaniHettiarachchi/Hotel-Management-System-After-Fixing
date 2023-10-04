const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone_number: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    reqired: true,
  },
  permissionLevel: {
    type: String,
    required: true,
    enum: ["ADMIN", "SUPPLIER", "CUSTOMER", "MANAGER"],
    default: "ADMIN",
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
