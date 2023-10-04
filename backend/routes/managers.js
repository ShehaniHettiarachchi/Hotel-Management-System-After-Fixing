const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ManagerToken } = require("../models/ManagerToken");
const { Manager } = require("../models/Manager");
const { ManagerAuth } = require("../middlewares/ManagerAuth");

//localhost:8070/customer/add

http: router.post("/add", (req, res) => {
  Manager.find({ userName: req.body.userName })
    .exec()
    .then((manager) => {
      if (manager.length >= 1) {
        return res.status(401).json({
          status: false,
          message: "userName exists",
          data: undefined,
        });
      } else {
        bcrypt.hash(req.body.password, 2, (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: false,
              message: "Error, cannot encrypt password",
              data: undefined,
            });
          } else {
            const manager = new Manager({ ...req.body, password: hash });
            manager.save((err, doc) => {
              if (err)
                return res.json({
                  status: false,
                  message: err,
                  data: undefined,
                });

              return res.status(200).json({
                status: true,
                message: "Register Successfully",
                data: doc,
              });
            });
          }
        });
      }
    });
});

//localhost:8070/manager/

htttp: router.route("/").get((req, res) => {
  Manager.find()
    .then((manager) => {
      res.json(manager);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/manager/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;
  //destructure
  const {
    name,
    userName,
    email,
    phone_number,
    address,
    NIC,
    DOB,
    gender,
    department,
    password,
  } = req.body;

  const updateManager = {
    name,
    userName,
    email,
    phone_number,
    address,
    NIC,
    DOB,
    gender,
    department,
    password,
  };

  const update = await Manager.findByIdAndUpdate(userID, updateManager)
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

//localhost:8090/manager/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Manager.findByIdAndDelete(userID)

    .then(() => {
      res.status(200).send({ status: "User syccessfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting user", error: err.message });
    });
});

// Get One Manager Details

router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;
  const user = await Manager.findById(userID)
    .then((manager) => {
      res.status(200).send({ status: "User fetched", manager });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

// Manager Login

//Localhost:8070/manager/login

router.post("/login", (req, res) => {
  Manager.findOne({ email: req.body.email })
    .exec()
    .then((manager) => {
      if (!manager) {
        return res.status(401).json({
          message: "User not found",
          status: false,
          data: undefined,
        });
      }

      bcrypt.compare(
        req.body.password,
        manager.password,
        async (err, result) => {
          if (err) {
            return res.status(401).json({
              status: false,
              message: "Server Error, authrntication failded",
              data: undefined,
            });
          }

          if (result) {
            const token = jwt.sign(
              {
                email: manager.email,
                managerId: manager._id,
              },

              process.env.JWT_KEY,
              {
                expiresIn: "2h",
              },
            );

            await ManagerToken.findOneAndUpdate(
              { _managerId: Manager._id, tokenType: "login" },
              { token: token },
              { new: true, upsert: true },
            );
            return res.status(200).json({
              status: true,
              message: "Login Successfully",

              data: {
                token,
                manager,
              },
            });
          }
          return res.status(401).json({
            status: true,
            message: "Wrong Password",
            data: undefined,
          });
        },
      );
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: "Server Error, authrntication failed....",
        data: undefined,
      });
    });
});

module.exports = router;
