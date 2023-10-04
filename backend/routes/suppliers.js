const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Supplier } = require("../models/supplier");
const { SupplierToken } = require("../models/SupplierToken");
const { SupplierAuth } = require("../middlewares/SupplierAuth");

// New Supplier Register

//Localhost:8070/suppliers/register

http: router.post("/register", (req, res) => {
  Supplier.find({ email: req.body.email })
    .exec()
    .then((supplier) => {
      if (supplier.length >= 1) {
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
            const supplier = new Supplier({ ...req.body, password: hash });
            supplier.save((err, doc) => {
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

// Get one Supplier Data

//Localhost:8070/suppliers/get/:id

http: router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;
  const user = await Supplier.findById(userID)
    .then((Supplier) => {
      res.status(200).send({ status: "Supplier Data Fetch", Supplier });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Supplier", error: err.message });
    });
});

// Supplier Login

//Localhost:8070/suppliers/login

http: router.post("/login", (req, res) => {
  Supplier.findOne({ email: req.body.email })
    .exec()
    .then((supplier) => {
      if (!supplier) {
        return res.status(401).json({
          message: "User not found",
          status: false,
          data: undefined,
        });
      }

      bcrypt.compare(
        req.body.password,
        supplier.password,
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
                email: supplier.email,
                supplierId: supplier._id,
              },

              process.env.JWT_KEY,
              {
                expiresIn: "2h",
              },
            );

            await SupplierToken.findOneAndUpdate(
              { _supplierId: Supplier._id, tokenType: "login" },
              { token: token },
              { new: true, upsert: true },
            );
            return res.status(200).json({
              status: true,
              message: "Login Successfully",

              data: {
                token,
                supplier,
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

// Supplier Logout

//Localhost:8070/suppliers/logout

http: router.get("/logout", SupplierAuth, (req, res) => {
  SupplierToken.findOneAndDelete(
    { _supplierId: req.supplierId, tokenType: "login" },
    (err, doc) => {
      if (err)
        return res.status(401).json({
          status: false,
          message: "Server error, logout failed",
        });

      return res.status(200).json({
        status: true,
        message: "Logout successfully",
      });
    },
  );
});

//Localhost:8070/suppliers/

http: router.route("/").get((req, res) => {
  Supplier.find()
    .then((supplier) => {
      res.json(supplier);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/suppliers/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Supplier.findByIdAndDelete(userID)

    .then(() => {
      res.status(200).send({ status: "Supplier successfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting Supplier", error: err.message });
    });
});


//localhost:8070/suppliers/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;

  //destructure
  const { name, email, phone, comName, comAddress, materialType } =
    req.body;

   

  const updateSupplier = {
    
    name,
    email,
    phone,
    comName,
    comAddress,
    materialType,
    
  };

  const update = await Supplier.findByIdAndUpdate(userID, updateSupplier)
    .then(() => {
      res.status(200).send({ status: "Supplier Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data!", error: err.message });
    });
});



module.exports = router;
