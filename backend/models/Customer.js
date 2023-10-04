const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerImage:{

    type:String,
    required:true,

  },
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

  address: {
    type: String,
    required: true,
  },

  NIC: {
    type: String,
    required: true,
  },

  DOB: {
    type: Date,
    reqired: true,
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
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
    default: "CUSTOMER",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = { Customer };
