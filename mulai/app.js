const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const app = express();
var serveStatic = require('serve-static');

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('Materi', './Materi');
app.set('views',path.join(__dirname,'views' ));
app.set('Materi',path.join(__dirname,'Materi' ));
app.set('tampilan',path.join(__dirname,'tampilan' ));


app.use(express.static(path.join(__dirname, '/gambar')));
app.use(express.static(path.join(__dirname, '/img')));
app.use(express.static(path.join(__dirname, '/Materi')));
app.use(express.static(path.join(__dirname, '/video')));
app.use(express.static(path.join(__dirname, '/img2')));


app.use(express.static(path.join(__dirname, '/tampilan')));

app.use(serveStatic(path.join(__dirname, 'tampilan'))) ;
app.use('/css', express.static(__dirname + '/css'))

app.use('/gambar', express.static(__dirname + '/gambar'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/img2', express.static(__dirname + '/img2'))
app.use('/Materi', express.static(__dirname + '/Materi'))

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
