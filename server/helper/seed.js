var User = require("./../models/User");

adminCreator = () => {
	var adminDetails = {
		username: "admin",
		email: "admin@fightiq.com",
		isAdmin: true,
		password: "12345"
	};

	User.findOne({ email: "admin@fightiq.com" }, (err, user) => {
		if (!user) {
			User.create(adminDetails, function() {
				// console.log("Admin user created!")
			});
		} else {
			// console.log("Admin already present!")
		}
	});
};

module.exports = adminCreator;
