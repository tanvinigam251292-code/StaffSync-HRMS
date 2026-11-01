const express = require("express");
const { authMiddleware }= require("../middleware/authMiddleware");
const { Register, login, updateProfile } = require("../controllers/authController");

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json(req.user);
});
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
