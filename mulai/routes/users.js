

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const flash = require('connect-flash');
const app = express ();






app.use(flash());




// Load User model
const User = require('../models/User');
const formulir = require('../models/formulir');
const login2 = require('../models/login2');
const about = require('../models/about');
const promo1 = require('../models/promo1');
const promo2 = require('../models/promo2');
const promo3 = require('../models/promo3');


const { forwardAuthenticated } = require('../config/auth');





// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
router.get('/indexx', forwardAuthenticated, (req, res) => res.render('indexx'));
router.get('/index2', forwardAuthenticated, (req, res) => res.render('index2'));
// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

router.get('/login2', forwardAuthenticated, (req, res) => res.render('login2'));
router.get('/register2', forwardAuthenticated, (req, res) => res.render('register2'));

router.get('/index', forwardAuthenticated, (req, res) => res.render('index'));
router.get('/home', forwardAuthenticated, (req, res) => res.render('home'));
router.get('/materi', forwardAuthenticated, (req, res) => res.render('materi'));

router.get('/materi1', forwardAuthenticated, (req, res) => res.render('materi1'));
router.get('/materi2', forwardAuthenticated, (req, res) => res.render('materi2'));


router.get('/kuis1', forwardAuthenticated, (req, res) => res.render('kuis1'));
router.get('/kuis2', forwardAuthenticated, (req, res) => res.render('kuis2'));
router.get('/kuis3', forwardAuthenticated, (req, res) => res.render('kuis3'));


router.get('/formulir', forwardAuthenticated, (req, res) => res.render('formulir'));
router.get('/register2', forwardAuthenticated, (req, res) => res.render('register2'));

router.get('/sampelpage', forwardAuthenticated, (req, res) => res.render('sampelpage'));

router.get('/faq', forwardAuthenticated, (req, res) => res.render('faq'));
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));
router.get('/formulir2', forwardAuthenticated, (req, res) => res.render('formulir2'));
router.get('/berita', forwardAuthenticated, (req, res) => res.render('berita'));
router.get('/sense', forwardAuthenticated, (req, res) => res.render('sense'));
router.get('/data', forwardAuthenticated, (req, res) => res.render('data'));
router.get('/about2', forwardAuthenticated, (req, res) => res.render('about2'));
router.get('/pembelian', forwardAuthenticated, (req, res) => res.render('pembelian'));
router.get('/Produk', forwardAuthenticated, (req, res) => res.render('Produk'));
router.get('/produk1', forwardAuthenticated, (req, res) => res.render('produk1'));
router.get('/produk2', forwardAuthenticated, (req, res) => res.render('produk2'));
router.get('/updateCustomer', forwardAuthenticated, (req, res) => res.render('updateCustomer'));
router.get('/updatepromo1', forwardAuthenticated, (req, res) => res.render('updatepromo1'));


// Membuat delete data untuk mahasiswa
deleteMahasiswa: async (req, res) => {
  try {
    /*
Membuat variabel yang menerima id yang didapat dari params
id didapat database dan id isinya dari params
*/
    const { id } = req.params;
    // cek data Mahasiswa yang mau di delete berdasarkan id
    const mahasiswa = await users.findOne({ _id: id });
    // setelah datanya sudah didapat maka menghapusnya
    await mahasiswa.remove();
    // ketika delete data memberikan notifikasi
    req.flash("alertMessage", "Success delete data mahasiswa");
    req.flash("alertStatus", "warning");
    // setelah berhasil remove maka melakukan redirect
    res.redirect("/data");
  } catch (error) {
    // ketika create data error memberikan notifikasi
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    // ketika inputa kosong redirect kehalaman
    res.redirect("/data");
  }
},

// deleted user







// router.get('/ufoto', forwardAuthenticated, (req, res) => res.render('ufoto'));


// Login2
// router.post('/login2', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/index2',
//     failureRedirect: '/users/login2',
//     failureFlash: true
//   })(req, res, next);
// });


// hapus about

// Membuat delete data untuk mahasiswa

router.post('/about2:id', async (req, res) => {

  try {
    /*
Membuat variabel yang menerima id yang didapat dari params
id didapat database dan id isinya dari params
*/
const { id } = req.params;
    // cek data Mahasiswa yang mau di delete berdasarkan id
    const abouts = await about.findOne({ _id: id });
    // setelah datanya sudah didapat maka menghapusnya
    await abouts.remove();
    // ketika delete data memberikan notifikasi
    req.flash("alertMessage", "Success delete data mahasiswa");
    req.flash("alertStatus", "warning");
    // setelah berhasil remove maka melakukan redirect
    res.redirect("/about2");
  } 
  
  catch (error) {
    // ketika create data error memberikan notifikasi
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    // ketika inputa kosong redirect kehalaman
    res.redirect("/about2");
  }

});

// upload foto2
app.post("/uploadImages", async function (request, result) {
  const images = []
  if (Array.isArray(request.files.images)) {
      for (let a = 0; a < request.files.images.length; a++) {
          images.push(request.files.images[a])
      }
  } else {
      images.push(request.files.images)
  }
  callbackFileUpload(images, 0, [], async function (savedPaths) {
      await db.collection("images").insertOne({
          images: savedPaths
      })

      result.send("Images has been uploaded.")
  })
})




// masuk admin
router.post('/login2', async (req, res) => {
  const a = req.body;
  const Name = await login2.findOne({ email :"admin2@gmail.com"}); 
  if (Name.email!= a.email){
   
    // return res.status(400).send(' Tidak menemukan data');

    // console.log(a.email);
    // console.log(Name.email);
    return res.status(400).send(" Salah Masuk Bro s");
  }

  else if(Name.email == a.email){
  //   try{
  //   }
  
  //  catch {
  //     res.status(500).send();
    
  //   }
    res.redirect('/data');
    // return res.status(400).send(' masuk ');
  }
  else{
   console.log('Rusak');
   return res.status(400).send(' engga ');
  }
 
});


//about edit

router.post('/aboutedit', (req, res) => {
  const { teks,name } = req.body;
  let errors = [];

     const newUser = new about({
        teks,
        name
        });

    newUser.save().then(user => {
      req.flash(
        'success_msg',
        'You are now formulir and can log in'
        );
      })

      
      .catch(err => console.log(err));
  
      res.redirect('/about2');
  
});

  //Promo1 edit

router.post('/promo1', (req, res) => {
  const { name,hasli,hpromo,fit1,fit2,fit3,fit4 } = req.body;
  let errors = [];

     const newUser = new promo1({
        name,
        hasli,
        hpromo,
        fit1,
        fit2,
        fit3,
        fit4
        });

    newUser.save().then(user => {
      req.flash(
        'success_msg',
        'You are now formulir and can log in'
        );
      })

      
      .catch(err => console.log(err));
  
      res.redirect('/Produk');
  
});


//Promo2 edit

router.post('/promo2', (req, res) => {
  const { name,hasli,hpromo,fit1,fit2,fit3,fit4 } = req.body;
  let errors = [];

     const newUser = new promo2({
        name,
        hasli,
        hpromo,
        fit1,
        fit2,
        fit3,
        fit4
        });

    newUser.save().then(user => {
      req.flash(
        'success_msg',
        'You are now formulir and can log in'
        );
      })

      
      .catch(err => console.log(err));
  
      res.redirect('/produk1');
  
});


//Promo3 edit

router.post('/promo3', (req, res) => {
  const { name,hasli,hpromo,fit1,fit2,fit3,fit4 } = req.body;
  let errors = [];

     const newUser = new promo3({
        name,
        hasli,
        hpromo,
        fit1,
        fit2,
        fit3,
        fit4
        });

    newUser.save().then(user => {
      req.flash(
        'success_msg',
        'You are now formulir and can log in'
        );
      })

      
      .catch(err => console.log(err));
  
      res.redirect('/produk2');
  
});


//formulir


router.post('/formulir', (req, res) => {
  const { name, jk, nowa, email,sts,program } = req.body;
  let errors = [];

     const newUser = new formulir({
          name,
          jk ,
          nowa ,
          email,
          sts,
          program
        });

    newUser.save().then(user => {
      req.flash(
        'success_msg',
        'You are now formulir and can log in'
        );
      })

      
      .catch(err => console.log(err));
  
      res.redirect('/formulir2');
  
});



// login register 2

  router.post('/reglogin2', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

      login2.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new login2({
            name,
            email,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/users/login2');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    
  });
  

router.get('/indexx', async (req,res) => {
  const jum= db.formulir.count();
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  // const Name = await formulir.findOne({ date :new_date}); 
  const Name = await db.formulir.find().limit(jum).pretty();
  res.render('indexx',{Name:Name});
 
 });




// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});


// Meteri

router.get('/materi', (req, res) => {
 
  res.redirect('materi');
});


// Meteri1

router.get('/materi1', (req, res) => {
 
  res.redirect('materi1');
});


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Registration successfully');
  res.locals.message = req.flash();
  res.redirect('/users/login');
});

module.exports = router;
