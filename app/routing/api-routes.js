
var friends = require('../data/friends.js');

module.exports = function(app) {

  app.route('/api/friends')
	.get( function(req, res) {
		res.json(friends);
	})

	.post( function(req, res) {
		var bestFriend = {
			name : "",
			photo : "",
			diff : 99
		};
		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;
		var totalDiff = 0;

		for (var i = 0; i < friends.length; i++){
			totalDiff = 0;
			for ( var j =0; j < 10; j++) {
				totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
					if (totalDiff <= bestFriend.diff){
						bestFriend.name = friends[i].name;
						bestFriend.photo = friends[i].photo;
						bestFriend.diff = totalDiff;
					}
			}
		}	

		friends.push(userData);
		res.json(bestFriend);
	});
};