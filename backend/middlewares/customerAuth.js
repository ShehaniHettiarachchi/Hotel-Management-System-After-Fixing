const { customerToken } = require("../models/customerToken");
const jwt = require("jsonwebtoken");

let CustomerAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  customerToken.findOne(
    { CustomerID: decoded.CustomerID, token, tokenType: "login" },
    (err, customerToken) => {
      if (err) throw err;
      if (!customerToken) {
        return res.json({
          isAuth: false,
        });
      }
      req.token = token;
      req.CustomerID = decoded.CustomerID;
      next();
    },
  );
};

module.exports = { CustomerAuth };
