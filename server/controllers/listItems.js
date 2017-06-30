var mongoose = require('mongoose');
var ListItem = mongoose.model('ListItem');

module.exports = {

    create: function(req, res) {
        var newListItem = new ListItem(req.body);
        // newAnswer._user = req.session.userId;
        newListItem.save(function(err, savedListItem) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("ListItem saved");
                res.json(newListItem);
            }
        })

    },
    //
    // getAnswer: function(req, res) {
    //     Answer.find({
    //         _question: req.body.question
    //     }).populate('_user').sort({
    //         $natural: -1
    //     }).limit(1).exec(function(err, answer) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(answer);
    //         }
    //     })
    // },

    getAnswers: function(req, res) {
        Answer.find({
            _question: req.body.question
        }).populate('_user').exec(function(err, answers) {
            if (err) {
                res.json(err);
            } else {
                res.json(answers);
            }
        })
    },

}
