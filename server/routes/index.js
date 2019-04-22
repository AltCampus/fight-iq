const express = require("express");
const router = express.Router();

const user = require("./userRoutes");
const admin = require("./adminRoutes");

router.use(user);
router.use(admin);

router.get("*", (req, res) => {
	const path = process.env.NODE_ENV == 'production' ? '/dist/bundle/' : '/static/';
	res.render("index", { path });
});

module.exports = router;
