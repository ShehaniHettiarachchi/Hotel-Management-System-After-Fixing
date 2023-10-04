const express = require("express");
const router = express.Router();
let Item = require("../models/item");

//create new item
//http://localhost:8070/item/add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const qty = Number(req.body.qty);
  const price = req.body.price;

  //create an item instance
  const newItem = new Item({
    name,
    description,
    qty,
    price,
  });

  //save the item to the database
  newItem
    .save()
    .then(() => {
      res.json("Item Added");
    })
    //something wrong with the server
    .catch((err) => {
      console.log(err.meesage);
      return res.status(500).send(("Server error" ));
    });
});

// http://localhost:8070/item/display

router.get("/display", (req, res) => {
  Item.find().exec((err, items) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingItems: items,
    });
  });
});

//get a specific item
//localhost:8070/item/get/626a23e62f6031aad4108030
http: router.route("/get/:id").get(async (req, res) => {
  let itemId = req.params.id;

  const item = await Item.findById(itemId)
    .then((item) => {
      res.status(200).json({
        success: true,
        item,
      });
    })
    .catch((err) => {
      console.log(err.meesage);
      res
        .status(500)
        .send({ status: "Error with get item", error: err.meesage });
    });
});

//update item
//http://localhost:8070/item/update/jasubnj88sjsnj
router.route("/update/:id").put(async (req, res) => {
  let itemId = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  const qty = Number(req.body.qty);
  const price = req.body.price;

  const updateItem = {
    name,
    description,
    qty,
    price,
  };
  const update = await Item.findByIdAndUpdate(itemId, updateItem)
    .then(() => {
      res.status(200).send({ status: "Item updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.meesage });
    });
});

//delete item
//http://localhost:8070/item/delete/jasubnj88sjsnj
router.delete("/delete/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id).exec((err, deletedItem) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });
    return res.json({
      message: "Delete Succesfull",
      deletedItem,
    });
  });
});

module.exports = router;
