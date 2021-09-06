const Course = require('../models/Courses');
const { muntipleMongooseToObjtect } = require('../../util/mongoose');

class SiteContronllers {
    // [GET] / home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: muntipleMongooseToObjtect(courses),
                });
            })
            .catch(next);
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteContronllers();
