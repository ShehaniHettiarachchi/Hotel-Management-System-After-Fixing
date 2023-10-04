const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer=require("multer")
const { Customer } = require("../models/Customer.js");
const { customerToken } = require("../models/customerToken");
const { CustomerAuth } = require("../middlewares/customerAuth");
const rateLimit = require("express-rate-limit");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads/customer");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per 15 minutes
  message: "Too many login attempts, please try again later.",
});

http: router.post("/add",upload.single("customerImage"), (req, res) => {
  Customer.find({ email: req.body.email })
    .exec()
    .then((customer) => {
      if (customer.length >= 1) {
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
            const customerImage=req.file.originalname
            const customer = new Customer({...req.body,customerImage,password: hash });
            
            customer.save((err, doc) => {
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

//localhost:8070/customer/

http: router.route("/").get((req, res) => {
  Customer.find()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/student/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;

  //destructure
  const { name, email, phone_number, address, NIC, DOB, gender, password } =
    req.body;


  const updateCustomer = {
    
    name,
    email,
    phone_number,
    address,
    NIC,
    DOB,
    gender,
    password,
  };

  const update = await Customer.findByIdAndUpdate(userID, updateCustomer)
    .then(() => {
      res.status(200).send({ status: "User Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating datails !", error: err.message });
    });
});

//localhost:8090/student/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Customer.findByIdAndDelete(userID)

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
  const user = await Customer.findById(userID)
    .then((customer) => {
      res.status(200).send({ status: "User fetched", customer });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

// Customer Login

//Localhost:8070/customer/login

http: router.post("/login", loginLimiter, (req, res) => {
  Customer.findOne({ email: req.body.email })
    .exec()
    .then((customer) => {
      if (!customer) {
        return res.status(401).json({
          message: "User not found",
          status: false,
          data: undefined,
        });
      }

      bcrypt.compare(
        req.body.password,
        customer.password,
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
                email: customer.email,
                customerId: customer._id,
              },

              process.env.JWT_KEY,
              {
                expiresIn: "2h",
              },
            );

            await customerToken.findOneAndUpdate(
              { _customerId: Customer._id, tokenType: "login" },
              { token: token },
              { new: true, upsert: true },
            );
            return res.status(200).json({
              status: true,
              message: "Login Successfully",
              data: {
                token,
                customer,
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

// Customer Logout

//Localhost:8070/customer/logout

http: router.get("/logout", CustomerAuth, (req, res) => {
  customerToken.findOneAndDelete(
    { _customerId: req.customerId, tokenType: "login" },
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
