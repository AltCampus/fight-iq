const express = require('express');
const router = express.Router();

const eventController = require('../controller/eventController')
const fightController = require('../controller/fightController')
const userController = require('../controller/userController')



// event routes

router.post('/admin/events', userController.isLoggedIn, eventController.createEvent); // done
router.get('/events', userController.isLoggedIn, eventController.getAllEvents);
// router.get('/events/:event_id',  userController.isLoggedIn, eventController.getEvent);
router.put('/events/:event_id', userController.isLoggedIn, eventController.editEvent);
router.delete('/events/:event_id', userController.isLoggedIn, eventController.deleteEvent);

// fight routes

router.post('/:event_id/fight', userController.isLoggedIn, fightController.createFight);
router.get('/:event_id/fight',  userController.isLoggedIn, fightController.getAllFight)
router.put('/:event_id/fight/:fight_id', userController.isLoggedIn, fightController.editFight);
router.delete('/:event_id/fight/:fight_id', userController.isLoggedIn, fightController.deleteFight);

// user routes

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/isLoggedIn', userController.isLoggedIn);
router.get('/loggedOut', userController.loggedOut);


router.get('*',(req,res)=>{
  res.render('index');
})



module.exports= router;