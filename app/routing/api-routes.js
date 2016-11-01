
var friends = require('../data/friends.js');

module.exports = function(app) {

  app.route('/api/friends')
	.get( function(req, res) {
		res.json(friends);
	})

	.post( function(req, res) {
		var bestMatch = {
			name: "",
			photo: "",
			difference: 99
		};
		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;
		var totalDifference = 0;

		for (var i = 0; i < friends.length; i++){
			totalDifference = 0;
			for ( var j =0; j < 10; j++) {
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
					if (totalDifference <= bestMatch.difference){
						bestMatch.name = friends[i].name;
						bestMatch.photo = friends[i].photo;
						bestMatch.difference = totalDifference;
					}
			}
		}	

		friends.push(userData);
		res.json(bestMatch);
	});
};