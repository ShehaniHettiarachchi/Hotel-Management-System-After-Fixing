const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  ptype: {
    type: String,
    enum: ["Select", "Family", "Couple", "Childern", "Event", "Other"],
    default: "Select",
    require: true,
  },

  /*Typecode : {
            type : String,
            required : true
        },*/
  Pnumber: {
    type: Number,
    required: true,
  },

  TimePeriod: {
    type: String,
    required: true,
  },
  BookPrice: {
    type: Number,
    required: true,
  },
  Persons: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

const Package = mongoose.model("Package", PackageSchema);

module.exports = Package;
