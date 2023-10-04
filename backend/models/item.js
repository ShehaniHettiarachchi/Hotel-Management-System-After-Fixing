// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const itemSchema = new Schema({

//     name:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     qty:{
//         type:Number,
//         required:true
//     },
//     price:{
//         type:String,
//         required:true
//     }
// })

// const Item = mongoose.model("Item",itemSchema);
// module.exports = {Item};
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
