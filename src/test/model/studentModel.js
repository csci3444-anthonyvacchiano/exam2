var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentModel = new Schema({
    name: String,
    Lastname: String,
    grade: String,
    age: Number,
    isFullTime: { type: Boolean, default: true }
});

module.exports = mongoose.model("Student", studentModel);