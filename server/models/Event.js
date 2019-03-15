const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	title: {type:String, required:true},
	location: {type:String, required:true},
	date_time: {type:String, required:true},
	fight: [{type:Schema.Types.ObjectId, ref:"Fight"}],
	main_event: {type:String, required:true},
	isExpired: {type: Boolean, default: false} 
})


const Event = mongoose.model("Event", EventSchema);
module.exports = Event;

