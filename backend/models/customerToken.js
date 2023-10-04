const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = Schema({
  token: {
    type: String,
    required: true,
  },

  _customerId: {
    type: Schema.Types.ObjectId,
    ref: "customers",
  },

  tokenType: {
    type: String,
    enum: ["login", "resetPassword"],
  },
});

const customerToken = mongoose.model("customerToken", tokenSchema);
module.exports = { customerToken };
