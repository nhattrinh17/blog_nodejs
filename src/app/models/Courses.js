const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CoursesSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videoId: { type: String, required: true },
        level: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// Costom query Heleprs
// CoursesSchema.query.sortable = function(req) {
//     if(req.query.hasOwnProperty('_sort')) {
//         const isValidtype = ['asc', 'desc'].includes(req.query.type);
//         return this.sort({
//             [req.query.column] : isValidtype ? req.query.type : 'desc',
//         })
//         return this
//     }
// }

// Add plugins
CoursesSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

CoursesSchema.plugin(AutoIncrement);
mongoose.plugin(slug);

module.exports = mongoose.model('courses', CoursesSchema);
