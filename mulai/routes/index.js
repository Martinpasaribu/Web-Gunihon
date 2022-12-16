const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const formulir = require('../models/formulir');
const login2 = require('../models/login2');
const about = require('../models/about');
const Users = require('../models/User');
const db = require('../app');
const promo1 = require('../models/promo1');
const promo2 = require('../models/promo2');
const promo3 = require('../models/promo3');

const visit = require('../models/visit');


router.get('/', forwardAuthenticated,async function(req,res){
      
  // Storing the records from the Visitor table
  let visitors = await visit.findOne({name: 'localhost'})

  // If the app is being visited first
  // time, so no records
  if(visitors == null) {
        
      // Creating a new default record
      const beginCount = new visit({
          name : 'localhost',
          count : 1
      })

      // Saving in the database
      beginCount.save()

      // Sending thee count of visitor to the browser
      res.send(`<h2>Counter: `+1+'</h2>')

      // Logging when the app is visited first time
      console.log("First visitor arrived")
  }
  else{
        
      // Incrementing the count of visitor by 1
      visitors.count += 1;

      // Saving to the database
      visitors.save()

      // Sending thee count of visitor to the browser
      // res.send(`<h2>Counter: `+visitors.count+'</h2>')
      let jum = visitors.count ;

      res.render('welcome');

      // Logging the visitor count in the console
      console.log("visitor arrived: ",visitors.count)
  }
})



 


 router.get('/data', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const customers = await Users.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(Name);
  res.render('data',{customers:customers});
 
 });

 router.get('/pembelian', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const pem = await formulir.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(Name);
  res.render('pembelian',{pem:pem});
 
 });



 router.get('/about2', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const abouts = await about.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('about2',{abouts:abouts});
 
 });

 
 router.get('/Produk', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const customer = await promo1.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('Produk',{customer:customer});
 
  
 });

  
 router.get('/produk1', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const pro2 = await promo2.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('produk1',{pro2:pro2});
 
 });
  
 router.get('/produk2', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const pro3 = await promo3.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('produk2',{pro3:pro3});
 
 });




 
 router.get('/about', async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const abouts = await about.find(); 
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('about',{abouts:abouts});
 
 });


// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );



// router.get('/index', ensureAuthenticated, (req, res) =>
//   res.render('index', {
//     user: req.user
//   })
// );



router.get('/index', ensureAuthenticated, async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const pro1 = await promo1.find(); 
  const pro2 = await promo2.find();
  const pro3 = await promo3.find();
  let tr = await formulir.find();
  let user = await Users.find();
  let visitors = await visit.find();
  // const Name = await formulir.find().limit(10).pretty();
  // console.log(abouts);
  res.render('index',{user:user,tr:tr,pro1:pro1,pro2:pro2,pro3:pro3,visitors:visitors});

 });



router.get('/indexx', ensureAuthenticated, (req, res) =>
  res.render('indexx', {
    user: req.user
  })
);

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
router.get('/materi2', ensureAuthenticated, (req, res) =>
  res.render('materi2', {
    user: req.user
  })
);

router.get('/kuis1', ensureAuthenticated, (req, res) =>
  res.render('kuis1', {
    user: req.user
  })
);

router.get('/kuis2', ensureAuthenticated, (req, res) =>
  res.render('kuis2', {
    user: req.user
  })
);

router.get('/kuis3', ensureAuthenticated, (req, res) =>
  res.render('kuis3', {
    user: req.user
  })
); 
router.get('/formulir', ensureAuthenticated, (req, res) =>
  res.render('formulir', {
    user: req.user
  })
);
router.get('/sampelpage', ensureAuthenticated, (req, res) =>
  res.render('sampelpage', {
    user: req.user
  })
);
router.get('/faq', ensureAuthenticated, (req, res) =>
  res.render('faq', {
    user: req.user
  })
);
router.get('/about', ensureAuthenticated, (req, res) =>
  res.render('about', {
    user: req.user
  })
);

// router.get('/formulir2', ensureAuthenticated, (req, res) =>
//   res.render('formulir2', {
//     user: req.user
//   })
// );

router.get('/formulir2',ensureAuthenticated, async (req,res) => {
  
  // const Formulir = await formulir.find();
  // console.log(Formulir.name);
  // res.render('indexx',{Formulir:Formulir});
  const Name = await formulir.find().sort({"date": -1}).limit(1); 
  // const Name = await formulir.find().limit(10).pretty();
  res.render('formulir2',{Name:Name});
  console.log(Name);
 
 });


router.get('/berita', ensureAuthenticated, (req, res) =>
  res.render('berita', {
    user: req.user
  })
);

router.get('/sense', ensureAuthenticated, (req, res) =>
  res.render('sense', {
    user: req.user
  })
);

router.get('/login2', ensureAuthenticated, (req, res) =>
  res.render('login2', {
    user: req.user
  })
);
router.get('/register2', ensureAuthenticated, (req, res) =>
  res.render('register2', {
    user: req.user
  })
);

router.get('/data', forwardAuthenticated, (req, res) =>
  res.render('data', {
    user: req.user
  })
);


router.get('/pembelian', forwardAuthenticated, (req, res) =>
  res.render('pembelian', {
    user: req.user
  })
);


router.get('/index2', ensureAuthenticated, (req, res) =>
  res.render('index2', {
    user: req.user
  })
);

router.get('/about2', ensureAuthenticated, (req, res) =>
  res.render('about2', {
    user: req.user
  })
);
router.get('/Produk', forwardAuthenticated, (req, res) =>
  res.render('Produk', {
    user: req.user
  })
);

router.get('/produk1', forwardAuthenticated, (req, res) =>
  res.render('produk1', {
    user: req.user
  })
);

router.get('/produk2', forwardAuthenticated, (req, res) =>
  res.render('produk2', {
    user: req.user
  })
);

router.get('/updateCustomer', forwardAuthenticated, (req, res) =>
  res.render('updateCustomer', {
    user: req.user
  })
);

router.get('/updatepromo1', forwardAuthenticated, (req, res) =>
  res.render('updatepromo1', {
    user: req.user
  })
);

// router.get('/ufoto', forwardAuthenticated, (req, res) =>
//   res.render('ufoto', {
//     user: req.user
//   })
// );


module.exports = router;

// module.exports = routes;
