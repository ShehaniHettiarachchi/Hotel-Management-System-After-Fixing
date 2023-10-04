const router = require("express").Router();
let Resource = require("../models/ResourcesMan");
const multer = require("multer");

const storage = multer.diskStorage({

  destination:(req , file ,callback)=>{
  
  callback(null,"../frontend/public/uploads/HotelResource/");
  
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Localhost:8070/resmanger/add

http: router.route("/add").post(upload.single("ResourceImage"), (req, res) => {
  const name = req.body.name;
  const rtype = req.body.rtype;

  const Rnumber = Number(req.body.Rnumber);
  const Price = Number(req.body.Price);
  const capacity = Number(req.body.capacity);
  const Description = req.body.Description;
  const ResourceImage = req.file.originalname;

  const newResource = new Resource({
    name,
    rtype,

    Rnumber,
    Price,
    capacity,
    Description,
    ResourceImage,
  });

  newResource
    .save()
    .then(() => {
      res.json("Resource Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Localhost:8070/resmanger/
http: router.route("/").get((req, res) => {
  Resource.find()
    .then((Resource) => {
      res.json(Resource);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Localhost:8070/resmanger/update/

http: router
  .route("/update/:id", upload.single("ResourceImage"))
  .put(async (req, res) => {
    let userId = req.params.id;
    const { name, rtype, Rnumber, Price, capacity, Description } = req.body;

    const updateResource = {
      name,
      rtype,
      //TypeCode,
      Rnumber,
      Price,
      capacity,
      Description,
    };
    const update = await Resource.findByIdAndUpdate(userId, updateResource)
      .then(() => {
        res.status(200).send({ status: "User updated" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error with updating data", error: err.message });
      });
  });

//Localhost:8070/resmanger/delete/

http: router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Resource.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Resource Deleted" });
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
  const user = await Resource.findById(userId)
    .then((Resource) => {
      res.status(200).send({ status: "user fetched", Resource });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
