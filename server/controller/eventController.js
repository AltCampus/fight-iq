const Event = require('../models/Event');


module.exports = {
	createEvent: (req, res) => {
		const newEvent = new Event(req.body)
			newEvent.save((err, event) => {
				if(err){
					return res.json({message : err,
					success:false})
				}else{
					return res.json({success: true,
							message: "New Event Added." })
				}
			})
	}, //end createEvent

	getAllEvents: (req, res) => {

		Event.find({}, (err, events) => {
			if(err){
				return res.json({success: false,
				message : err})
			}else{
				return res.json({events,
				  success: true})
			}
		})
	},

	getEvent: (req, res) => {
		const id = req.params.event_id;
		Event.findOne({_id:id})
			.populate('fight')
			.exec((err, event) => {
				if (err || !event) {
					return res.status(400).json({
						success:false,
						message:err
					})
				}	
				return res.json({
					event,
					success:true
				})
			})
	},

	editEvent: (req, res) => {
		const id = req.params.event_id;

		Event.findByIdAndUpdate(id, req.body, {new:true}, (err, event) => {
			if(err) res.json({success: false,
							message : err})
				res.json({event, success: true})
		})
	},

	deleteEvent: (req, res) => {
		const id = req.params.event_id;
		Event.findByIdAndRemove(id, (err, event) => {
			if(err || !event) {
				return res.json({success: false,
					message : err})
			}else{
				return res.json({success: true,
					message : "Event Deleted Successfully"})
					}
				})
			}

}// end module.exports
