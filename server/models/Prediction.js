const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PredictionSchema = new Schema(
	{
		eventid: { type: Schema.Types.ObjectId, ref: "Event" },
		fightid: { type: Schema.Types.ObjectId, ref: "Fight" },
		winner: { type: Schema.Types.ObjectId, ref: "Player" },
		type: { type: String, enum: ["Main", "Co-Main", "other"] },
		round: { type: String, enum: ["3", "5"] }
	},
	{ timestamps: true }
);

const Prediction = mongoose.model("Prediction", PredictionSchema);
module.exports = Prediction;
