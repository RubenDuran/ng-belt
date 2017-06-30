var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserSchema = mongoose.Schema({
    name: {type: String, minlength: 1, require: true}
}, {timestamps:true})
mongoose.model('User', UserSchema);
