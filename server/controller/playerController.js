const Player = require("../models/Player");

module.exports = {
	createPlayer: (req, res) => {
		const newPlayer = new Player({ ...req.body });
		newPlayer.save((err, player) => {
			if (err) {
				return res.json({ message: err, success: true });
			} else {
				return res
					.status(201)
					.json({ success: true, message: "New Player Added." });
			}
		});
	}, //end createPlayer

	getAllPlayers: (req, res) => {
		Player.find({}, (err, player) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res.status(200).json({ player, success: true });
			}
		});
	}, // end get all player

	getPlayer: (req, res) => {
		Player.findOne({ _id: req.params.player_id }, (err, player) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res.status(200).json({ player, success: true });
			}
		});
	}, // end getPlayer

	editPlayer: (req, res) => {
		const id = req.params.player_id;
		Player.findByIdAndUpdate(id, req.body, {new:true}, (err, player) => {
			if(err) return res.json({message:err,success: false})
				return res.status(200).json({player,success: true,})
		})
	}, // end edit player

	deletePlayer: (req, res) => {
		const id = req.params.player_id;
		Player.findByIdAndRemove(id, (err, player) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res
					.status(200)
					.json({ message: "Player deleted Successfully", success: true });
			}
		});
	} // end delete player
}; // end module.exports
