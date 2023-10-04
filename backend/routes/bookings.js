const router = require("express").Router();
let Booking = require("../models/Booking");

//Add new booking

http: router.route("/add").post((req, res) => {
  const cusName = req.body.cusName;
  const cusEmail = req.body.cusEmail;
  const resName = req.body.resName;
  const resPrice = req.body.resPrice;
  const bDate = req.body.bDate;
  const cNumber = req.body.cNumber;
  const expDate = req.body.expDate;
  const CVV = req.body.CVV;

  const NewBooking = new Booking({
    cusName,
    cusEmail,
    resName,
    resPrice,
    bDate,
    cNumber,
    expDate,
    CVV

  });

  NewBooking.save()
    .then(() => {
      res.json("Booking Successfully placed!");
    })
    .catch((err) => {
      console.log(err);
    });
});

//-----view details-----

htttp: router.route("/").get((req, res) => {
  Booking.find()
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      console.log(err);
    });
});

//-----update details-----

http: router.route("/update/:id").put(async (req, res) => {
  let bookingID = req.params.id;
  //destructure
  const { cusName, cusEmail, resname,resPrice, bDate ,cNumber , expDate , CVV } = req.body;

  const updateBooking = {
    cusName,
    cusEmail,
    resname,
    resPrice,
    bDate,
    cNumber,
    expDate,
    CVV
  };

  const update = await Booking.findByIdAndUpdate(bookingID, updateBooking)
    .then(() => {
      res.status(200).send({ status: "Booking Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data!", error: err.message });
    });
});

//-----delete details------

http: router.route("/delete/:id").delete(async (req, res) => {
  let bookingID = req.params.id;

  await Booking.findByIdAndDelete(bookingID)

    .then(() => {
      res.status(200).send({ status: "Booking syccessfully Cancelled" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with cancelling booking", error: err.message });
    });
});

//-----get details from one employee-----

router.route("/get/:id").get(async (req, res) => {
  let bookingID = req.params.id;
  const booking = await Booking.findById(bookingID)
    .then((Booking) => {
      res.status(200).send({ status: "User fetched", Booking });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
