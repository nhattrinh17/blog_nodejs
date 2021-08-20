class NewsContronllers {
    // [GET] / new
    index(req, res) {
        res.render('news');
    }

    // [GET] /new/:slug
    show(req, res) {
        res.send('New Slug');
    }
}

module.exports = new NewsContronllers();
