var Users = require('./../controllers/users.js');
var Buckets = require('./../controllers/buckets.js');
var ListItems = require('./../controllers/ListItems.js');
var path = require('path');

function authenticate(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = function(app) {

    app.post('/api/users', Users.create);
    app.get('/', function(req, res, next) {
        res.sendFile(path.resolve('./my-black-belt/dist/index.html'));
    })
    app.use(authenticate);
    app.get('/api/allUsers', Users.getUsers);
    app.get('/api/user', Users.getUser);
    app.post('/api/addListItem', ListItems.create);
    app.post('/api/addBucketItem', Buckets.create);
    app.get('/api/bucket', Buckets.getMyBucket);
    app.post('/api/userBucket', Buckets.getUserBucket);
    app.post('/api/anotherUser', Users.getAnotherUser);
    app.post('/api/changeStatus', Buckets.changeStatus);
    // app.post('/api/option/create', Options.create);
    // app.get('/api/questions', Questions.getQuestions);
    // app.post('/api/question', Questions.getQuestion);
    // app.post('/api/options', Options.getOptions);
    // app.post('/api/votes', Options.addVote);
    // app.get('/api/user', Users.getUser);
    // app.get('/api/destroy/:id', Questions.destroy);
}
