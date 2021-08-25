var Course = require('../models/Courses');

class SiteContronllers {
    // [GET] / home
    index(req, res) {
        Course.find({}, function (error, courses) {
            if (!error) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR !!!' });
            }
        });

        // res.render('home');
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteContronllers();
