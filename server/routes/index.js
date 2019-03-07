const express = require("express");
const router = express.Router();

const eventController = require("../controller/eventController");
const fightController = require("../controller/fightController");
const userController = require("../controller/userController");

// event routes

router.post(
	'/admin/events',
	userController.isLoggedIn,
	eventController.createEvent
); // done

router.get('/events',
 userController.isLoggedIn,
  eventController.getAllEvents
  ); //done

router.get('/admin/events/:event_id',  
userController.isLoggedIn, 
eventController.getEvent
); //done

router.put(
	'/admin/events/:event_id',
	userController.isLoggedIn,
	eventController.editEvent
); // done

router.delete(
	'/admin/events/:event_id',
	userController.isLoggedIn,
	eventController.deleteEvent
);

// fight routes

router.post(
	"/admin/events/:event_id/fight",
	userController.isLoggedIn,
	fightController.createFight
);
router.get(
	"/events/:event_id/fight",
	userController.isLoggedIn,
	fightController.getAllFight
);
router.put(
	"/admin/events/:event_id/fight/:fight_id",
	userController.isLoggedIn,
	fightController.editFight
);
router.delete(
	"admin/events/:event_id/fight/:fight_id",
	userController.isLoggedIn,
	fightController.deleteFight
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
