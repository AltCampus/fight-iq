const Result = require('../models/Result');
const Fight = require('../models/Fight');
const User = require('../models/User');

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
				// update points
				updateScore(req,res);

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
				//update points
				updateScore(req,res);

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

function updateScore(req,res) {

		User.find({},'predictions')
			.populate({
				path: "predictions", select:"fightid winner type round",
				populate: [
					{
						path: "fightid",
						select: "result",
						populate: [	
							{ path: "result", populate: { path: "winner" , select:"name"} }
						]
					},
					{ path: "winner", select:"name" }
				]
			})
			.exec((err, users) => {
				if (err || !users) {
					return res.status(404).json({
						success: false,
						message: err || "User not present"
					});
				}

				// user update

				users.forEach((singleUser)=>{
					console.log(singleUser)
					var winCorrectCount=0, points = 0, accuracy = 0, completedEventCount=0;
					singleUser.predictions.forEach((data)=>{
						if (data.fightid.result){ // If result present
							completedEventCount++;
							if (data.winner.name === data.fightid.result.winner.name){
								winCorrectCount++;
								points+=10;
								if(data.type === data.fightid.result.type){
									points+=30;
									if(data.round === data.fightid.result.round){
										points+=60;
									}
								}
							}
						}
					}); 

					accuracy = Math.floor((winCorrectCount/completedEventCount)*100) || 0;

					User.findByIdAndUpdate(singleUser._id,  {$set: { "points":points, "accuracy":accuracy }}, {new:true}, (err, newData) => {
						if(err) return res.json({success:false, message:err})
					})

				}); // end of forEach
			});
	}

