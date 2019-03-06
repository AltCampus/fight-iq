const Fight = require('../models/Fight');


module.exports = {
	createFight: (req, res) => {
		const newFight = new Fight({...req.body,event_id:req.params.event_id})
			newFight.save((err, fight) => {
				if(err){
					res.send(err)
				}else{
					res.json({fight})
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
