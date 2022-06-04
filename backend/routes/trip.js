const express = require("express");

const router = express.Router();
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const { add } = require("../controllers/trip.controller.js");

router.post("/add", isAuthenticated, authorizeRoles("Client"), add);

module.exports = router;
