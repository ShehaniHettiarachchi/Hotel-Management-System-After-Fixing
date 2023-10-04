const express = require("express");
const router = express.Router();
const { Feedback } = require("../models/feedback");

//Localhost:8070/feedback/add

http: router.route("/add").post((req, res) => {
  const cusEmail = req.body.cusEmail;
  const message = req.body.message;

  const newFeedback = new Feedback({
    cusEmail,
    message,
  });

  newFeedback
    .save()
    .then(() => {
      res.json("Feedback Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/feedback/

http: router.route("/").get((req, res) => {
  Feedback.find()
    .then((Feedback) => {
      res.json(Feedback);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
