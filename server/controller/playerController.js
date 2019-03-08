const Player = require('../models/Player');

module.exports = {
	createPlayer: (req, res) => {
		const newPlayes = new Player(req.body);
		newPlayer.save((err, player) => {
			if(err) res.send(err)
				res.json({
					player,
					success: true,
					message: "Player Created Successfully"
				})
		})	
	},

}
