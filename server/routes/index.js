const express = require("express");
const router = express.Router();

const eventController = require("../controller/eventController");
const fightController = require("../controller/fightController");
const userController = require("../controller/userController");
const playerController = require("../controller/playerController");

// event routes

router.post(
	"/admin/events",
	userController.isLoggedIn,
	eventController.createEvent
); // done

router.get('/events',
  eventController.getAllEvents
  ); //done

router.get('/events/:event_id',  
eventController.getEvent
); //done


router.put(
	"/admin/events/:event_id",
	userController.isLoggedIn,
	eventController.editEvent
); // done

router.delete(
	"/admin/events/:event_id",
	userController.isLoggedIn,
	eventController.deleteEvent
);

// fight routes

router.post(
	"/admin/events/:event_id/fights",
	userController.isLoggedIn,
	fightController.createFight
);

router.get("/events/:event_id/fights", fightController.getAllFight);
router.get("/events/:event_id/fights/:fight_id", fightController.getFight);

router.put(
	"/admin/events/:event_id/fights/:fight_id",
	userController.isLoggedIn,
	fightController.editFight
);
router.delete(
	"/admin/events/:event_id/fights/:fight_id",
	userController.isLoggedIn,
	fightController.deleteFight
);

// player routes

router.post(
	"/admin/players",
	userController.isLoggedIn,
	playerController.createPlayer
);
router.get(
	"/players",
	playerController.getAllPlayers
);
router.get(
	"/players/:player_id",
	playerController.getPlayer
);
router.put(
	"/admin/players/:player_id",
	userController.isLoggedIn,
	playerController.editPlayer
);
router.delete(
	"admin/players/:player_id",
	userController.isLoggedIn,
	playerController.deletePlayer
);

// user routes

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/isLoggedIn", userController.isUser);
router.get("/loggedOut", userController.loggedOut);

router.get("*", (req, res) => {
	res.render("index");
});

module.exports = router;
