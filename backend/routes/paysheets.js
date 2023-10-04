const router = require("express").Router();
let Paysheet = require("../models/paysheet.js");

//Localhost:8070/paysheets/add

http: router.route("/add").post((req, res) => {
  const empid = req.body.empid;
  const empName = req.body.empName;
  const empDesignation = req.body.empDesignation;
  const payDate = req.body.payDate;
  const bankName = req.body.bankName;
  const bankAccNum = req.body.bankAccNum;
  const amount = req.body.amount;

  const newPaysheet = new Paysheet({
    empid,
    empName,
    empDesignation,
    payDate,
    bankName,
    bankAccNum,
    amount,
  });

  newPaysheet
    .save()
    .then(() => {
      res.json("Paysheet Added Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Localhost:8070/paysheets/

http: router.route("/").get((req, res) => {
  Paysheet.find()
    .then((paysheet) => {
      res.json(paysheet);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/paysheets/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Paysheet.findByIdAndDelete(userID)

    .then(() => {
      res.status(200).send({ status: "Paysheet successfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting Supplier", error: err.message });
    });
});

//localhost:8070/paysheets/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;
  //destructure
  const {
    empid,
    empName,
    empDesignation,
    payDate,
    bankName,
    bankAccNum,
    amount,
  } = req.body;

  const updatePaysheet = {
    empid,
    empName,
    empDesignation,
    payDate,
    bankName,
    bankAccNum,
    amount,
  };

  const update = await Paysheet.findByIdAndUpdate(userID, updatePaysheet)
    .then(() => {
      res.status(200).send({ status: "Paysheet Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data!", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;
  const user = await Paysheet.findById(userID)
    .then((paysheet) => {
      res.status(200).send({ status: "User fetched", paysheet });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
