var mongoose = require('mongoose');
var schema = mongoose.Schema;
var BucketSchema = mongoose.Schema({
    status: {type: Boolean, default:false},
    _user: {type: schema.Types.ObjectId, ref: 'User'},
    _listItem: {type: schema.Types.ObjectId, ref: 'ListItem'},
}, {timestamps:true})
mongoose.model('Bucket', BucketSchema);
