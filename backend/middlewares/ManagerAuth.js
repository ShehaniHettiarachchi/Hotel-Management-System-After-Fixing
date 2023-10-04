const { ManagerToken } = require("../models/ManagerToken");
const jwt = require("jsonwebtoken");

let ManagerAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  ManagerToken.findOne(
    { ManagerID: decoded.ManagerID, token, tokenType: "login" },
    (err, managerToken) => {
      if (err) throw err;
      if (!managerToken) {
        return res.json({
          isAuth: false,
        });
      }
      req.token = token;
      req.ManagerID = decoded.ManagerID;
      next();
    },
  );
};

module.exports = { ManagerAuth };
