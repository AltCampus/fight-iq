const express = require("express");
const router = express.Router();

const eventController = require("../controller/eventController");
const fightController = require("../controller/fightController");
const userController = require("../controller/userController");
const playerController = require("../controller/playerController");
// const predictionController = require("../controller/predictionController");
const resultController = require("../controller/resultController");

// event routes

router.post(
	"/admin/events",
	userController.isLoggedIn,
	userController.isAdmin,
	eventController.createEvent
); // done

router.get("/events", eventController.getAllEvents); //done

router.get("/events/:event_id", eventController.getEvent); //done

router.put(
	"/admin/events/:event_id",
	userController.isLoggedIn,
	userController.isAdmin,
	eventController.editEvent
); // done

router.delete(
	"/admin/events/:event_id",
	userController.isLoggedIn,
	userController.isAdmin,
	eventController.deleteEvent
);

// fight routes

router.post(
	"/admin/events/:event_id/fights",
	userController.isLoggedIn,
	userController.isAdmin,
	fightController.createFight
);

router.get("/events/:event_id/fights", fightController.getAllFight);

router.get("/events/:event_id/fights/:fight_id", fightController.getFight);

router.put(
	"/admin/events/:event_id/fights/:fight_id",
	userController.isLoggedIn,
	userController.isAdmin,
	fightController.editFight
);
router.delete(
	"/admin/events/:event_id/fights/:fight_id",
	userController.isLoggedIn,
	userController.isAdmin,
	fightController.deleteFight
);

// player routes

router.post(
	"/admin/players",
	userController.isLoggedIn,
	userController.isAdmin,
	playerController.createPlayer
);
router.get("/players", playerController.getAllPlayers);
router.get("/players/:player_id", playerController.getPlayer);
router.put(
	"/admin/players/:player_id",
	userController.isLoggedIn,
	userController.isAdmin,
	playerController.editPlayer
);
router.delete(
	"/admin/players/:player_id",
	userController.isLoggedIn,
	userController.isAdmin,
	playerController.deletePlayer
);

// Result routes

router.get(
	"/admin/:fight_id/result",
	userController.isLoggedIn,
	resultController.getResult
);
router.post(
	"/admin/:fight_id/result",
	userController.isLoggedIn,
	resultController.createResult
);
router.put(
	"/admin/:fight_id/result",
	userController.isLoggedIn,
	resultController.editResult
);
router.delete(
	"/admin/:fight_id/result",
	userController.isLoggedIn,
	resultController.deleteResult
);

module.exports = router;
