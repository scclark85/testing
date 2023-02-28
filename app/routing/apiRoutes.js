var friends = require("../data/friendData.js");

// exports API routes
module.exports = function (app) {
    // list of friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // add new friends
    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            friendName: "",
            friendPic: "",
            friendDifference: Infinity
        };

        var newFriend = req.body;
        var newScores = newFriend.Score;


        var totalDifference;

        // shows eachs persons score array
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            //console.log(friends[i].Score);

            // goes through each persons score array and extracts individual value
            for (var x = 0; x < friends[i].Score.length; x++) {
                // console.log(friends[i].Score[x]);
                // console.log("new friend", newScores[x]);

                totalDifference += Math.abs(parseInt(newScores[x]) - parseInt(friends[i].Score[x]));

            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.friendName = friends[i].friendName;
                bestMatch.friendPic = friends[i].friendPic;
                bestMatch.friendDifference = totalDifference;
            }

        }

        // will add new user
        friends.push(newFriend);

        // send back to browser the best friend match
        res.json(bestMatch);
    });
}


// var path = require("path");
// var friends = require("../data/friendData.js");

// // exports API routes
// module.exports = function (app) {
//     // list of friend entries
//     app.get("/api/friends", function (req, res) {
//         res.json(friends);
//     });

//     // add new friends
//     app.post("/api/friends", function (req, res) {

//         var bestMatch = {
//             friendName: "",
//             friendPic: "",
//             Score: Infinity
//         };

//         var newFriend = req.body;
//         var newScores = newFriend.Score;


//         var totalDifference;

//         // shows eachs persons score array
//         for (var i = 0; i < friends.length; i++) {

//             //console.log(friends[i].Score);

//             // goes through each persons score array and extracts individual value
//             for (var x = 0; x < friends[i].Score.length; x++) {
//                 // console.log(friends[i].Score[x]);
//                 // console.log("new friend", newScores[x]);

//                 totalDifference += Math.abs(parseInt(newFriend.Score[x]) - parseInt(friends[i].Score[x]));

//             }

//             if (totalDifference <= bestMatch.friendDifference) {
//                 bestMatch.friendName = friends[i].friendName;
//                 bestMatch.friendPic = friends[i].friendPic;
//                 bestMatch.Score = friends[i].Score;
//             }

//         }

//         // will add new user
//         friends.push(newFriend);

//         // send back to browser the best friend match
//         res.json(bestMatch);
//     });
// }