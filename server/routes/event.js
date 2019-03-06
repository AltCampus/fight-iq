const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController.js')



router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents)
router.put('/', eventController.editEvent);
router.delete('/:id', eventController.deleteEvent)




module.exports = router;