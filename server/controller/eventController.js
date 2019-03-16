const Event = require('../models/Event');
const Fight = require('../models/Fight');

module.exports = {
	createEvent: (req, res) => {
		const newEvent = new Event(req.body)
			newEvent.save((err, event) => {
				if(err){
					return res.json({message : err,
					success:false})
				}else{
					return res.status(201).json({success: true,
							message: "New Event Added." })
				}
			})
	}, //end createEvent

	getAllEvents: (req, res) => {
		Event.find({})
		. populate({
			path: 'fight',
			populate: { path: 'player1 player2 result'}
		  })
		.exec((err, event) => {
			if (err || !event) {
				return res.status(400).json({
					success:false,
					message:err
				})
			}	
			return res.status(200).json({
				event,
				success:true
			})
		})
	},

	getEvent: (req, res) => {
		const id = req.params.event_id;
		Event.findOne({_id:id})
			. populate({
					path: 'fight', select: 'title type rounds player1 player2 isPredicted',
					populate: [
						{ path: 'player1 player2', select: 'name image'}, 
						{ path: 'result', 
						  populate: { path:'winner', select: 'name' }}
					]
			  })
			.exec((err, event) => {
				if (err || !event) {
					return res.status(400).json({
						success:false,
						message:err
					})
				}	
				return res.status(200).json({
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
				res.status(200).json({event, success: true})
		})
	},

	deleteEvent: (req, res) => {
		console.log("within server controller")
		const id = req.params.event_id;
		Event.findByIdAndRemove(id, (err, event) => {
			if(err || !event) {
				return res.json({success: false,
					message : err})
			} else {
				Fight.remove({event: id}, (err, fight) => {
					if(err) return res.json({success: false,
						message : err})
						else
							console.log("Inside delete DB")
				return res.status(200).json({success: true,
					message : "Event Deleted Successfully"})
					})
			}})
			}

}// end module.exports
