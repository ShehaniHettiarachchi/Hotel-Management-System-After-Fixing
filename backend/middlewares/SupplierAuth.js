const { SupplierToken } = require("../models/SupplierToken");
const jwt = require("jsonwebtoken");

let SupplierAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  SupplierToken.findOne(
    { SupplierrID: decoded.SupplierID, token, tokenType: "login" },
    (err, supplierToken) => {
      if (err) throw err;
      if (!supplierToken) {
        return res.json({
          isAuth: false,
        });
      }
      req.token = token;
      req.SupplierID = decoded.SuppliierID;
      next();
    },
  );
};

module.exports = { SupplierAuth };
