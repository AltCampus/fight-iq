const Event = require('../models/Event');


module.exports = {
	createEvent: (req, res) => {
		const newEvent = new Event(req.body)
			newEvent.save((err, event) => {
				if(err){
					res.send({...err,
					status:false})
				}else{
					res.json({success: true,
							message: "New Event Added." })
				}
			})
	}, //end createEvent

	getAllEvents: (req, res) => {

		Event.find({}, (err, event) => {
			if(err){
				res.send({success: false,
							message : err})
			}else{
				res.json({event,
				          success: true})
			}
		})
	},

	editEvent: (req, res) => {
		const id = req.body._id;

		Event.findByIdAndUpdate(id, req.body, {new:true}, (err, data) => {
			if(err) res.send({success: false,
							message : err})
				res.json({data, success: true})
		})
	},

	deleteEvent: (req, res) => {
		const id = req.body._id;
		console.log(id, "check1")
		Event.findByIdAndRemove(id, (err, event) => {
			if(err) {
				res.send({success: false,
					message : err})
			}else{
				res.json({success: true,
					message : "Event Deleted Successfully"})
					}
				})
			}

}// end module.exports
