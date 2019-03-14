const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
	winner: {type:Schema.Types.ObjectId, ref:"Fight"},
	type: {type:String, required:true},
	round: {type:String, required:true}
})

const Result = mongoose.model("Result", ResultSchema);
module.exports = Result;
