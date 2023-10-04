const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = Schema({
  token: {
    type: String,
    required: true,
  },

  _managerId: {
    type: Schema.Types.ObjectId,
    ref: "Manager",
  },

  tokenType: {
    type: String,
    enum: ["login", "resetPassword"],
  },
});

const ManagerToken = mongoose.model("ManagerToken", tokenSchema);
module.exports = { ManagerToken };
