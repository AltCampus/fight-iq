const Prediction = require('../models/Prediction');
const User = require('../models/User');

module.exports = {
	createPrediction: (req, res) => {
		const newPrediction = new Prediction(req.body)
			newPrediction.save((err, prediction) => {
				if(err){
					return res.json({message : err,
					success:false})
				}else{
					// ToDo: Add prediction inside the user schema
					return res.status(201).json({success: true,
							message: "New Prediction Added." })
				}
			})
	},
	getPrediction: (req, res) => {
		const id = req.params.prediction_id;
		Prediction.findOne({_id:id},(err,prediction)=>{
			if (err || !prediction) {
					return res.status(400).json({
						success:false,
						message:err
					})
			}
			return res.status(200).json({
					prediction,
					success:true
			})
		})
	},
	editPrediction: (req, res) => {
		const id = req.params.prediction_id;
		Prediction.findByIdAndUpdate(id, req.body, {new:true}, (err, prediction) => {
			if(err){
				res.json({success: false, message : err})
			} else {
				// Todo: Update in the user schema
				res.status(200).json({prediction, success: true})
			}
		})
	},
	deletePrediction: (req, res) => {
		const id = req.params.prediction_id;
		Prediction.findByIdAndRemove(id, (err, prediction) => {
			if(err || !prediction) {
				return res.json({success: false,
					message : err})
			} else {
				// Todo: delete from the user schema
				return res.status(200).json({success: true, message : "Prediction Deleted Successfully"})
			}
		})
	}
}
