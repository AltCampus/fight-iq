const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FightSchema = new Schema({
    title: {type:String, require:true},
    type: {type:String, require:true},
    rounds: {type:String, require:true},
    player1: {type:Schema.Types.ObjectId, ref:"Player"},
    player2: {type:Schema.Types.ObjectId, ref:"Player"},
    event_id: {
        type: Schema.Types.ObjectId, ref: 'Event' 
    }
    
})


const Fight = mongoose.model("Fight", FightSchema);
module.exports = Fight;

