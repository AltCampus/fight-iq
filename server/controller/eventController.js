const Event = require('../models/Event');


module.exports = {
	createEvent: (req, res) => {
		const newEvent = new Event(req.body)
			newEvent.save((err, event) => {
				if(err){
					res.send(err)
				}else{
					res.json({event})
				}
			})
	}, //end createEvent

	editEvent: (req, res) => {
		const id = req.body._id;
		console.log(id)
		Event.findByIdAndUpdate(id, req.body, {new:true}, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	},

	getAllEvents: (req, res) => {
		console.log(req.body, "req body check")
		Event.find({}, (err, event) => {
			if(err){
				res.send(err)
			}else{
				res.json(event)
			}
		})
	},

	deleteEvent: (req, res) => {
		const id = req.body._id;
		console.log(id, "check1")
		Event.findByIdAndRemove(id, (err, event) => {
			console.log(event)
			if(err) {
				res.send(err)
			}else{
				Event.find({}, (err, data) => {
					if(err){
						res.send(err)
					}else{
						res.json(data)
					}
				})
			}
		})
	}

	

}// end module.exports
