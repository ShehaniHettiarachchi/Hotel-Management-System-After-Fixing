const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = Schema({
  token: {
    type: String,
    required: true,
  },

  _supplierId: {
    type: Schema.Types.ObjectId,
    ref: "suppliers",
  },

  tokenType: {
    type: String,
    enum: ["login", "resetPassword"],
  },
});

const SupplierToken = mongoose.model("token", tokenSchema);
module.exports = { SupplierToken };
