const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	name: {type:String, require:true},
	weight: {type:String, require:true},
	height: {type:String, require:true},
	rank: String,
})


const Player = mongoose.model("Event", PlayerSchema);
module.exports = Player;

