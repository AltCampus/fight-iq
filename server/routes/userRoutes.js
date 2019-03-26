const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

const eventController = require("../controller/eventController");
const fightController = require("../controller/fightController");
// const userController = require("../controller/userController");
const playerController = require("../controller/playerController");
const predictionController = require("../controller/predictionController");
const resultController = require("../controller/resultController");

router.post(
	"/admin/events",
	userController.isLoggedIn,
	userController.isAdmin,
	eventController.createEvent
); // done

// Prediction routes

router.get(
	"/prediction/:prediction_id",
	userController.isLoggedIn,
	predictionController.getPrediction
);
router.post(
	"/prediction",
	userController.isLoggedIn,
	predictionController.createPrediction
);
router.put(
	"/prediction/:prediction_id",
	userController.isLoggedIn,
	predictionController.editPrediction
);
router.delete(
	"/prediction/:prediction_id",
	userController.isLoggedIn,
	predictionController.deletePrediction
);
// user routes

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/isLoggedIn", userController.isUser);
router.get("/loggedOut", userController.loggedOut);
router.get("/user", userController.getUser);

// router.get("*", (req, res) => {
// 	res.render("index");
// });

module.exports = router;
