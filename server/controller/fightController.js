const Fight = require('../models/Fight');
const Event = require('../models/Event');

module.exports = {
	createFight: (req, res) => {
		const newFight = new Fight({...req.body,event:req.params.event_id})
			newFight.save((err, fight) => {
				if(err){
					return res.json({message: err, success:true})
				}else {
				    Event.findByIdAndUpdate(req.params.event_id, {$push: {fight: newFight._id}}, {new :true}, (err, post) => {
						if(err) return res.json({
							message: err,
							success: false
						});
					return res.json({success: true,
						message: "New Fight Added." });
				})
			}
			})
	}, //end createEvent

	getAllFight: (req, res) => {
		
		Fight.find({event: req.params.event_id}, (err, fight) => {
			if(err){
				return res.json({message:err,success: false})
			}else{
				return res.json({fight,success:true})
			}
		})
	},

	getFight: (req, res) => {
	
		Fight.findOne({_id:req.params.fight_id})
			.populate('event')
			.exec((err, fight) => {
				if (err || !fight) {
					return res.status(400).json({
						success:false,
						message:err
					})
				}	
				return res.json({
					fight,
					success:true
				})
			})
	},

	editFight: (req, res) => {
		const id = req.params.fight_id;
		Fight.findByIdAndUpdate(id, req.body, {new:true}, (err, data) => {
			if(err) return res.json({message:err,success: false})
				return res.json({data,success: true,})
		})
	},

	deleteFight: (req, res) => {
		const id = req.params.fight_id;
		Fight.findByIdAndRemove(id, (err, fight) => {
			if(err) {
				return res.json({message:err,success: false})
			}else{
				Fight.find({event_id: req.params.event_id}, (err, data) => {
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
