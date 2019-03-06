const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	title: String,
	location: String,
	date_time: String
})


const Event = mongoose.model("Event", EventSchema);
module.exports = Event;

