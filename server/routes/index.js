const express = require('express');
const router = express.Router();

const eventController = require('../controller/eventController')
const fightController = require('../controller/fightController')
const userController = require('../controller/userController')


// router.get('*',(req,res)=>{
//   res.render('index');
// })



// event routes

router.post('/event', userController.isLoggedIn, eventController.createEvent);
router.get('/event', userController.isLoggedIn, eventController.getAllEvents)
router.put('/event', userController.isLoggedIn, eventController.editEvent);
router.delete('/event/:id', userController.isLoggedIn, eventController.deleteEvent);

// fight routes

router.post('/:event_id/fight', userController.isLoggedIn, fightController.createFight);
router.get('/:event_id/fight',  userController.isLoggedIn, fightController.getAllFight)
router.put('/:event_id/fight/:fight_id', userController.isLoggedIn, fightController.editFight);
router.delete('/:event_id/fight/:fight_id', userController.isLoggedIn, fightController.deleteFight);

// user routes

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/isLoggedIn', userController.isUser);
router.get('/loggedOut', userController.loggedOut);



module.exports= router;