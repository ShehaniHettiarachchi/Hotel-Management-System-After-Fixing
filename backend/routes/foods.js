const router = require("express").Router();
let Food = require("../models/food");

//Localhost:8070/food/add

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const foodid = Number(req.body.foodid);
  const description = req.body.description;
  const price = Number(req.body.price);

  const newFood = new Food({
    name,
    foodid,
    description,
    price,
  });

  newFood
    .save()
    .then(() => {
      res.json("Food Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Food.find()
    .then((foods) => {
      res.json(foods);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let foodId = req.params.id;
  const { name, id, description, price } = req.body;

  const updatefood = {
    name,
    id,
    description,
    price,
  };

  const update = await Food.findByIdAndUpdate(foodId, updatefood)
    .then(() => {
      res.status(200).send({ status: "Food updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let foodId = req.params.id;

  await Food.findByIdAndDelete(foodId);

  await Food.findByIdAndDelete(foodId)

    .then(() => {
      res.status(200).send({ status: "Food deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete food", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const food = await Food.findById(userId)
    .then((food) => {
      res.status(200).send({ status: "Food fetched", food });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get food", error: err.message });
    });
});
module.exports = router;
