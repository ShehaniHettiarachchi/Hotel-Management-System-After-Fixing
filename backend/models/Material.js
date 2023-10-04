const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  materialName: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },

  supEmail: {
    type: String,
    required: true,
  },

  supContact: {
    type: String,
    required: true,
  },

  supCompany: {
    type: String,
    required: true,
  },

  unitPrice: {
    type: String,
    required: true,
  },

  materialImage: {
    type: String,
    required: true,
  },
});

const Material = mongoose.model("Material", MaterialSchema);
module.exports = Material;
