const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );


router.get('/home', ensureAuthenticated, (req, res) =>
  res.render('home', {
    user: req.user
  })
);

router.get('/materi', ensureAuthenticated, (req, res) =>
  res.render('materi', {
    user: req.user
  })
);
router.get('/materi1', ensureAuthenticated, (req, res) =>
  res.render('materi1', {
    user: req.user
  })
);
router.get('/kuis1', ensureAuthenticated, (req, res) =>
  res.render('kuis1', {
    user: req.user
  })
);

router.get('/formulir', ensureAuthenticated, (req, res) =>
  res.render('formulir', {
    user: req.user
  })
);


module.exports = router;
