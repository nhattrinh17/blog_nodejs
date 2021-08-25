const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courses = new Schema({
    name: { type: String, default: '', maxLeng: 255 },
    desctiption: { type: String, default: '' },
    image: { type: String, default: '' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Courses);
