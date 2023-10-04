const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
    maxlength: 10,
  },

  comName: {
    type: String,
    require: true,
  },

  comAddress: {
    type: String,
    require: true,
  },

  materialType: {
    type: String,
    require: true,
  },

  supGender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
    requrired: true,
  },

  password: {
    type: String,
    require: true,
  },
  permissionLevel: {
    type: String,
    required: true,
    enum: ["ADMIN", "SUPPLIER", "CUSTOMER", "MANAGER"],
    default: "SUPPLIER",
  },
});

supplierSchema.methods.generateAuthToken = function () {
  const SupplierToken = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
    expiresIn: "2h",
  });

  return SupplierToken;
};

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = { Supplier };
