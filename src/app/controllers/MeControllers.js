const Course = require('../models/Courses');
const { muntipleMongooseToObjtect } = require('../../util/mongoose');

class MeControllers {
    // me/stored/courses

    courses(req, res, next) {
        let courseQuery = Course.find({});

        courseQuery.sort({ [req.query.column]: req.query.type });

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('me/stored-courses', {
                    courses: muntipleMongooseToObjtect(courses),
                    deleteCount: deleteCount,
                });
            })
            .catch(next);
    }

    // me/stored/blog
    blog(req, res, next) {
        res.send('Stored blog!!!!');
    }

    // me/trash/courses
    showDeleted(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.countDocuments()])
            .then(([courses, counts]) => {
                res.render('me/trash-courses', {
                    courses: muntipleMongooseToObjtect(courses),
                    counts: counts,
                });
            })
            .catch(next);
    }
}

module.exports = new MeControllers();
