const express = require('express');
const router = express.Router();

const eventController = require('../controller/eventController')
const fightController = require('../controller/fightController')
const userController = require('../controller/userController')

// router.get('/', (req,res)=>{
//   res.render("index")
// })



// event routes

router.post('/event', eventController.createEvent);
router.get('/event', eventController.getAllEvents)
router.put('/event', eventController.editEvent);
router.delete('/event/:id', eventController.deleteEvent);

// fight routes

// router.post('/:event/fight', fightController.createFight);
// router.get('/:event/fight', fightController.getAllFight)
// router.put('/:event/fight', fightController.editFight);
// router.delete('/:event/fight/:id', fightController.deleteFight);

// user routes

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser)



module.exports= router;