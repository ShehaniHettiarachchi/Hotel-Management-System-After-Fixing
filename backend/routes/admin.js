const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/Admin");
const { AdminToken } = require("../models/AdminToken");
const { AdminAuth } = require("../middlewares/AdminAUth");

//localhost:8070/admin/add

http: router.post("/add", (req, res) => {
  Admin.find({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (admin.length >= 1) {
        return res.status(401).json({
          status: false,
          message: "Email exists",
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
            const admin = new Admin({ ...req.body, password: hash });
            admin.save((err, doc) => {
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

//localhost:8070/admin/

http: router.route("/").get((req, res) => {
  Admin.find()
    .then((Admin) => {
      res.json(Admin);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/admin/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;
  //destructure
  const { name, email, phone_number, password } = req.body;

  const updateAdmin = {
    name,
    email,
    phone_number,
    password,
  };

  const update = await Admin.findByIdAndUpdate(userID, updateAdmin)
    .then(() => {
      res.status(200).send({ status: "Admin Details Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data!", error: err.message });
    });
});

//localhost:8090/admin/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Admin.findByIdAndDelete(userID)

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


router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;
  const user = await Admin.findById(userID)
    .then((Admin) => {
      res.status(200).send({ status: "User fetched", Admin });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

// Admin Login

//Localhost:8070/admin/login

http: router.post("/login", (req, res) => {
  Admin.findOne({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (!admin) {
        return res.status(401).json({
          message: "User not found",
          status: false,
          data: undefined,
        });
      }

      bcrypt.compare(req.body.password, admin.password, async (err, result) => {
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
              email: admin.email,
              adminId: admin._id,
            },

            process.env.JWT_KEY,
            {
              expiresIn: "2h",
            },
          );

          await AdminToken.findOneAndUpdate(
            { _adminId: Admin._id, tokenType: "login" },
            { token: token },
            { new: true, upsert: true },
          );
          return res.status(200).json({
            status: true,
            message: "Login Successfully",
            data: {
              token,
              admin,
            },
          });
        }
        return res.status(401).json({
          status: true,
          message: "Wrong Password",
          data: undefined,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: "Server Error, authrntication failed....",
        data: undefined,
      });
    });
});

// Admin Logout

//Localhost:8070/admin/logout

http: router.get("/logout", AdminAuth, (req, res) => {
  Token.findOneAndDelete(
    { _adminId: req.adminId, tokenType: "login" },
    (err, doc) => {
      if (err)
        return res.status(401).json({
          status: false,
          message: "Server error, Logout Failed",
        });

      return res.status(200).json({
        status: true,
        message: "Logout Successfully",
      });
    },
  );
});

module.exports = router;
