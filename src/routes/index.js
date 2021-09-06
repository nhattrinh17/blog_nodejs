const newRouter = require('./news');
const siteRoute = require('./site');
const CoursesRoute = require('./courses');
const MeRoute = require('./me');

function route(app) {
    app.use('/news', newRouter);

    app.use('/courses', CoursesRoute);

    app.use('/me', MeRoute);

    // Không nên để bên trên do nếu để trên n sẽ ưu tiên và vào trước
    app.use('/', siteRoute);
}

module.exports = route;
