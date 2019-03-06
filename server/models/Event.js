const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	title: {type:String, require:true},
	location: {type:String, require:true},
	date_time: {type:String, require:true}
})


const Event = mongoose.model("Event", EventSchema);
module.exports = Event;

