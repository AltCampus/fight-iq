const Result = require('../models/Result');
const Fight = require('../models/Fight');

module.exports = {
	createResult: (req, res) => {
		let fightId = req.params.fight_id
		let newResult = new Result(req.body);
		newResult.save((err,result)=>{
			if(err){
				return res.json({message : err, success:false})
			} 
			Fight.findByIdAndUpdate(fightId, {result: result.id}, (err,fight)=>{
				if (err){
					return res.json({message : err, success:false})
				}
				return res.status(201).json({success: true, message: "New Result Added." })
			})
		})
	},  
	getResult: (req, res) => {
		const fightId = req.params.fight_id;
		Fight.findById(fightId, (err,fight) =>{
			if (err || !fight) {
				return res.status(400).json({
						success:false,
						message:err || "Fight not found!"
				})
			}
			Result.findById(fight.result, (err,result) =>{
				if (err || !result) {
					return res.status(400).json({
						success:false,
						message:err || "Result not found!"
					})
				}
				return res.status(200).json({
					result,
					success:true
				})
			})
		})
	},
	editResult: (req, res) => {
		const fightId = req.params.fight_id;
		Fight.findById(fightId, (err,fight) =>{
			if (err || !fight) {
				return res.status(400).json({
						success:false,
						message:err || "Fight not found!"
				})
			}
			Result.findByIdAndUpdate(fight.result, req.body , (err,result) =>{
				if (err || !result) {
					return res.status(400).json({
						success:false,
						message:err || "Result not found!"
					})
				}
				return res.status(200).json({
					result,
					success:true
				})
			})
		})
	},
	deleteResult: (req, res) => {
		const fightId = req.params.fight_id;
		Fight.findByIdAndUpdate(fightId, {result: null} ,(err,fight)=>{
			if (err || !fight){
				return res.json({success: false, message : err || "Fight not found"})
			}
			Result.findByIdAndRemove(fight.result,(err,result)=>{
				if (err){
					return res.json({success: false, message : err})
				}
				return res.status(200).json({success: true, message : "Result Deleted Successfully"})
			})
		})
	}
}
