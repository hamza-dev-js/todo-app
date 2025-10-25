// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

module.exports = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ message: "Authentication required" });

  const token = header.split(" ")[1]; // Bearer token
  if (!token) return res.status(401).json({ message: "Authentication required" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded; // { id, username, role }
    next();
  });
};
