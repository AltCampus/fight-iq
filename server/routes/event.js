const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController.js')

router.get('/',(req,res)=>{
  res.render("index")
})


router.post('/', eventController.createEvent);
router.put('/', eventController.editEvent);
router.get('/', eventController.getAllEvents)
router.delete('/:id', eventController.deleteEvent)




module.exports= router;