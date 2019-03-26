const express = require("express");
const router = express.Router();

const user = require("./userRoutes");
const admin = require("./adminRoutes");

router.use(user);
router.use(admin);

router.get("*", (req, res) => {
	res.render("index");
});

module.exports = router;
