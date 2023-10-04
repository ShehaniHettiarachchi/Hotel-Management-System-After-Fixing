const router = require("express").Router();
let Employee = require("../models/Employee");
//const Employee = require("../models/Employee");

http: router.route("/add").post((req, res) => {
  const First_Name = req.body.First_Name;
  const Last_Name = req.body.Last_Name;
  const Home_Address = req.body.Home_Address;
  const Email = req.body.Email;
  const Phone_Number = Number(req.body.Phone_Number);
  const Emergency_Contact_NUmber = Number(req.body.Emergency_Contact_NUmber);

  const NewEmployee = new Employee({
    First_Name,
    Last_Name,
    Home_Address,
    Email,
    Phone_Number,
    Emergency_Contact_NUmber,
  });

  NewEmployee.save()
    .then(() => {
      res.json("Employee Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//-----view details-----

htttp: router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

//-----update details-----

http: router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;
  //destructure
  const {
    First_Name,
    Last_Name,
    Home_Address,
    Email,
    Phone_Number,
    Emergency_Contact_NUmber,
  } = req.body;

  const updateEmployee = {
    First_Name,
    Last_Name,
    Home_Address,
    Email,
    Phone_Number,
    Emergency_Contact_NUmber,
  };

  const update = await Employee.findByIdAndUpdate(userID, updateEmployee)
    .then(() => {
      res.status(200).send({ status: "Employee Updated" });
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
  let userID = req.params.id;

  await Employee.findByIdAndDelete(userID)

    .then(() => {
      res.status(200).send({ status: "Employee syccessfully Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting user", error: err.message });
    });
});

//-----get details from one employee-----

router.route("/get/:id").get(async (req, res) => {
  let userID = req.params.id;
  const user = await Employee.findById(userID)
    .then((Employee) => {
      res.status(200).send({ status: "User fetched", Employee });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
