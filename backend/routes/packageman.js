const router = require("express").Router();
let Package = require("../models/Package");

//Localhost:8070/package/add

http: router.route("/add").post((req, res) => {
  const name = req.body.name;
  const ptype = req.body.rtype;

  const Pnumber = Number(req.body.Pnumber);
  const TimePeriod = req.body.TimePeriod;
  const BookPrice = Number(req.body.BookPrice);
  const Persons = Number(req.body.Persons);
  const Description = req.body.Description;

  const newPackage = new Package({
    name,
    ptype,

    Pnumber,
    TimePeriod,
    BookPrice,
    Persons,
    Description,
  });

  newPackage
    .save()
    .then(() => {
      res.json("Package Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Localhost:8070/package/
http: router.route("/").get((req, res) => {
  Package.find()
    .then((Package) => {
      res.json(Package);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Localhost:8070/package/update/

http: router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, ptype, Pnumber, TimePeriod, BookPrice, Persons, Description } =
    req.body;

  const updatePackage = {
    name,
    ptype,

    Pnumber,
    TimePeriod,
    BookPrice,
    Persons,
    Description,
  };
  const update = await Package.findByIdAndUpdate(userId, updatePackage)
    .then(() => {
      res.status(200).send({ status: "Package updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});


const get_items_by_name=(req,res)=>{
  //Item.find(req.params.id,(err,item)=>{{name: "Renato"}
  Package.find({name:`/.*${req.body.name}.*/` },(err,item)=>{
      if(err){
          res.send(err);
      }
      res.json(item);
  });
};

//Localhost:8070/package/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Package.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Package Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Package.findById(userId)
    .then((Package) => {
      res.status(200).send({ status: "Package fetched", Package });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
