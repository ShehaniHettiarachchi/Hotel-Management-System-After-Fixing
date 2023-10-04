const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RmanagerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  rtype: {
    type: String,
    enum: ["Select", "Pool", "ReceptionHall", "Ground", "Room", "Other"],
    default: "Select",
    require: true,
  },

  /*Typecode : {
            type : String,
            required : true
        },*/
  Rnumber: {
    type: Number,
    required: true,
  },

  Price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },

  ResourceImage: {
    type: String,
    required: true,
  },
});

const ResourcesMan = mongoose.model("Resource", RmanagerSchema);

module.exports = ResourcesMan;
