const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FightSchema = new Schema({
    title: String,
    type: String,
    rounds: String,
    player1: String,
    player2: String,
    event_id: {
        type: Schema.Types.ObjectId, ref: 'Event' 
    }
    
})


const Fight = mongoose.model("Fight", FightSchema);
module.exports = Fight;

