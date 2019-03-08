const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	name: {type:String, required:true},
	weight: {type:String, required:true},
	height: {type:String, required:true},
	rank: {type:String, required:true}
})


const Player = mongoose.model("Player", playerSchema);
module.exports = Player;

