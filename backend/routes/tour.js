const router = require("express").Router();
//const customer = require("../models/Customer.js");
let Tour = require("../models/tour.model");

//localhost:8070/customer/add

http: router.route("/add").post((req, res) => {
  const name = req.body.name;
  const package_type = req.body.package_type;
  const visiting_places = req.body.visiting_places;
  const duration = req.body.duration;
  const vehicle_type = req.body.vehicle_type;
  const maximum_passengers = Number(req.body.maximum_passengers);
  const package_price = req.body.package_price;

  const NewTour = new Tour({
    name,
    package_type,
    visiting_places,
    duration,
    vehicle_type,
    maximum_passengers,
    package_price,
  });

  NewTour.save()
    .then(() => {
      res.json("Tour Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/student/

http: router.route("/").get((req, res) => {
  Tour.find()
    .then((Tour) => {
      res.json(Tour);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/student/update/

http: router.route("/update/:id").put(async (req, res) => {
  let tourID = req.params.id;
  //destructure
  const {
    name,
    package_type,
    visiting_places,
    duration,
    vehicle_type,
    maximum_passengers,
    package_price,
  } = req.body;

  const updateTour = {
    name,
    package_type,
    visiting_places,
    duration,
    vehicle_type,
    maximum_passengers,
    package_price,
  };

  const update = await Tour.findByIdAndUpdate(tourID, updateTour)
    .then(() => {
      res.status(200).send({ status: "user Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data!", error: err.message });
    });
});

//localhost:8090/student/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let tourID = req.params.id;

  await Tour.findByIdAndDelete(tourID)

    .then(() => {
      res.status(200).send({ status: "Tour syccessfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting Tour", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let tourID = req.params.id;
  const tour = await Tour.findById(tourID)
    .then((Tour) => {
      res.status(200).send({ status: "Tour fetched", Tour });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Tour", error: err.message });
    });
});

module.exports = router;
