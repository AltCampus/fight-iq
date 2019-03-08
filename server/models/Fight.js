const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FightSchema = new Schema({
    title: {type:String, required:true},
    type: {type:String, required:true},
    rounds: {type:String, required:true},
    player1: {type:Schema.Types.ObjectId, ref:"Player"},
    player2: {type:Schema.Types.ObjectId, ref:"Player"},
    event: {
        type: Schema.Types.ObjectId, ref: 'Event' 
    }
    
})


const Fight = mongoose.model("Fight", FightSchema);
module.exports = Fight;

