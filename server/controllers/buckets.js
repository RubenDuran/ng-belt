var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var ListItem = mongoose.model('ListItem');
var User = mongoose.model('User');

module.exports = {

    create: function(req, res) {
        var newBucket = new Bucket(req.body);
        // newAnswer._user = req.session.userId;
        newBucket.save(function(err, savedBucket) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                res.json(newBucket);
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

    getMyBucket: function(req, res) {
        Bucket.find({
            _user: req.session.userId
        }).populate('_listItem').exec(function(err, bucket) {
            if (err) {
                res.json(err);
            } else {
                res.json(bucket);
            }
        })
    },

    getUserBucket: function(req, res) {
        console.log("in get userbucket", req.body);
        Bucket.find({
            _user: req.body._user
        }).populate('_listItem').exec(function(err, bucket) {
            if (err) {
                res.json(err);
            } else {
                res.json(bucket);
            }
        })
    },

    changeStatus: function(req, res) {
        console.log("in controllers changeStatus", req.body);
        Bucket.find({
            _id: req.body.id
        }).exec(function(err, bucket) {
            if (err) {
                res.json(err);
            } else {
                console.log('current status, ', bucket[0].status);
                if(bucket[0].status === true){
                    bucket[0].status = false;
                    console.log('changed to false');
                } else {
                    bucket[0].status = true;
                    console.log('changed to true');
                }
                bucket[0].save(function(err, savedBucket) {
                    if (err) {
                        console.log("something went wrong");
                        res.json(err);
                    } else {
                        console.log("message saved");
                        res.json(savedBucket);
                    }
                })
            }
        })
    },

}
