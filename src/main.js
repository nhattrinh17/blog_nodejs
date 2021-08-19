const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3030;

const route = require("./routes");

// Đọc file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Lấy dữ liệu của form data 
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Http logger
app.use(morgan("combined"));

// Template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, "resources\\views"));

// Home , search, contract


// Route innit
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});