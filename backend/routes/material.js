const express = require("express");
const router = express.Router();
const multer = require("multer");
let Material = require("../models/Material");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads/Materials/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Add Material

//localhost:8070/material/add

http: router.route("/add").post(upload.single("materialImage"), (req, res) => {
  const materialName = req.body.materialName;
  const quantity = req.body.quantity;
  const supEmail = req.body.supEmail;
  const supContact = req.body.supContact;
  const supCompany = req.body.supCompany;
  const unitPrice = Number(req.body.unitPrice);
  const materialImage = req.file.originalname;

  const NewMaterial = new Material({
    materialName,
    quantity,
    supEmail,
    supContact,
    supCompany,
    unitPrice,
    materialImage,
  });

  NewMaterial.save()
    .then(() => {
      res.json("Material Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/material/

http: router.route("/").get(upload.single("materialImage"), (req, res) => {
  Material.find()
    .then((supplier) => {
      res.json(supplier);
    })
    .catch((err) => {
      console.log(err);
    });
});

http://localhost:8070/material/get/:email

router.route("/get/:email").get(async (req, res) => {
  let userID = req.params.supEmail;
  const user = await Material.findOne({ supEmail: req.params.email })
    .then((Material) => {

      res.status(200).send({ status: "Material Data Fetch", Material });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Supplier", error: err.message });
    });
});

http://localhost:8070/material/delete

router.route("/delete/:id").delete(async (req, res) => {

  let userId = req.params.id;

  await Material.findByIdAndDelete(userId).then(() => {

    res.status(200).send({ status: "Material Deleted" })

  }).catch((err) => {

    console.log(err.message);
    res.status(500).send({ status: "Error Delete Material", error: err.message });

  })

})





module.exports = router;
