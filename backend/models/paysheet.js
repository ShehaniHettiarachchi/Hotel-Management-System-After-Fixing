const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paysheetSchema = new Schema({
  empid: {
    type: String,
    required: true,
  },

  empName: {
    type: String,
    required: true,
  },

  empDesignation: {
    type: String,
    required: true,
  },

  payDate: {
    type: Date,
    required: true,
  },

  bankName: {
    type: String,
    required: true,
  },

  bankAccNum: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },
});

const Paysheet = mongoose.model("Paysheet", paysheetSchema);

module.exports = Paysheet;
