const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  First_Name: {
    type: String,
    required: true,
  },

  Last_Name: {
    type: String,
    required: true,
  },

  Home_Address: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },

  Phone_Number: {
    type: Number,
    required: true,
  },

  Emergency_Contact_NUmber: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
