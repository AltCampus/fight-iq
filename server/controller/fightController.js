const Fight = require('../models/Fight');
const Event = require('../models/Event');

module.exports = {
	createFight: (req, res) => {
		const newFight = new Fight({...req.body,event_id:req.params.event_id})
			newFight.save((err, fight) => {
				if(err){
					return res.send(err)
				}else {
				    Event.findByIdAndUpdate(req.params.event_id, {$push: {fight: newFight._id}}, {new :true}, (err, post) => {
						if(err) return res.json({
							success: false,	
						});
					return res.json({success: true,
						message: "New Fight Added." });
				})
			}
			})
	}, //end createEvent

	getAllFight: (req, res) => {
		
		Fight.find({}, (err, fight) => {
			if(err){
				res.send(err)
			}else{
				res.json(fight)
			}
		})
	},

	editFight: (req, res) => {
		const id = req.body.fight_id;
		Fight.findByIdAndUpdate(id, req.body, {new:true}, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	},

	deleteFight: (req, res) => {
		const id = req.body.fight_id;
		Fight.findByIdAndRemove(id, (err, fight) => {
			if(err) {
				res.send(err)
			}else{
				Fight.find({}, (err, data) => {
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
