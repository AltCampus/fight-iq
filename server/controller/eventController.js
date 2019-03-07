const Event = require('../models/Event');
const Fight = require('../models/Fight');


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

		Event.find({}, (err, events) => {
			if(err){
				res.send({success: false,
							message : err})
			}else{
				res.json({events,
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
						msg: ''
					})
				}	
				return res.json({
					event
				})
			})
	},

	editEvent: (req, res) => {
		const id = req.params.event_id;

		Event.findByIdAndUpdate(id, req.body, {new:true}, (err, data) => {
			if(err) res.send({success: false,
							message : err})
				res.json({data, success: true})
		})
	},

	deleteEvent: (req, res) => {
		const id = req.params.event_id;
		Event.findByIdAndRemove(id, (err, event) => {
			console.log(event,'raviravi');
			if(err || !event) {
				res.send({success: false,
					message : err})
			}else{
				res.json({success: true,
					message : "Event Deleted Successfully"})
					}
				})
			}

}// end module.exports
