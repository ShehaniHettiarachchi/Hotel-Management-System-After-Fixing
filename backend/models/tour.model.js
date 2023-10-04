const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  package_type: {
    type: String,
    required: true,
  },

  visiting_places: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  vehicle_type: {
    type: String,
    required: true,
  },

  maximum_passengers: {
    type: Number,
    reqired: true,
  },

  package_price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tour", tourSchema);
