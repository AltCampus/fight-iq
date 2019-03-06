const express = require('express');
const router = express.Router();

const eventController = require('../controller/eventController')
const fightController = require('../controller/fightController')
const userController = require('../controller/userController')


router.get('*',(req,res)=>{
  res.render('index');
})


// router.get('/register', (req, res)=>{
//   res.render('index');
// })

// router.get('/login', (req, res)=>{
//   res.render('index');
// })


// event routes

router.post('/event', eventController.createEvent);
router.get('/event', eventController.getAllEvents)
router.put('/event', eventController.editEvent);
router.delete('/event/:id', eventController.deleteEvent);

// fight routes

router.post('/:event_id/fight', fightController.createFight);
router.get('/:event_id/fight', fightController.getAllFight)
router.put('/:event_id/fight/:fight_id', fightController.editFight);
router.delete('/:event_id/fight/:fight_id', fightController.deleteFight);

// user routes

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/isLoggedIn', userController.isLoggedIn);
router.get('/loggedOut', userController.loggedOut)



module.exports= router;