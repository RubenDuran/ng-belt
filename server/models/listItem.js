var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ListItemSchema = mongoose.Schema({
    title: {type: String, minlength: 5, require: true},
    description: {type: String, minlength: 10, require: true},
    creator: {type: String, minlength: 1, require: true},
}, {timestamps:true})
mongoose.model('ListItem', ListItemSchema);
