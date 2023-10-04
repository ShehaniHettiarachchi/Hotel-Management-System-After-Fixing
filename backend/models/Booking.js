const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  cusName: {
    type: String,
    required: true,
  },

  cusEmail: {
    type: String,
    required: true,
  },

  resName: {
    type: String,
    required: true,
  },

  resPrice: {
    type: Number,
    required: true,
  },

  bDate: {
    type: Date,
    reqired: true,
  },

  cNumber: {
    type: String,
    reqired: true,
  },
  expDate: {
    type: Date,
    reqired: true,
  },
  CVV: {
    type: Number,
    reqired: true,
  },

});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
