
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
var bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const app = express();



const fs = require('fs');
var serveStatic = require('serve-static');


const users = [{name:'Martin'}];

// Passport Config
// require('./config/passport2')(passport);
require('./config/passport')(passport);

// deleted and updated 
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

// app.use(
//   session({
//     secret:"keyboard cat",
//     resave: false,
//     saveUninitialized:true,
//     cookie:{maxAge:6000},
//   })
// );

// ufoto
// const initRoutes = require("./routes");

// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);



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



// // admin
// const adminRoute = require('./routes/adminRoute');
// app.use('/login2',adminRoute);

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('Materi', './Materi');
app.set('views',path.join(__dirname,'views' ));
app.set('Materi',path.join(__dirname,'Materi' ));
app.set('tampilan',path.join(__dirname,'tampilan' ));
app.set('middleware',path.join(__dirname,'middleware' ));


app.set('controllers',path.join(__dirname,'controllers' ));

app.set('uploads',path.join(__dirname,'uploads' ));

app.use(express.static(path.join(__dirname, '/gambar')));
app.use(express.static(path.join(__dirname, '/img')));
app.use(express.static(path.join(__dirname, '/Materi')));
app.use(express.static(path.join(__dirname, '/video')));
app.use(express.static(path.join(__dirname, '/img2')));
app.use(express.static(path.join(__dirname, '/uploads')));
// app.use(express.static(path.join(__dirname, '/uploads')));

app.use(express.static(path.join(__dirname, '/tampilan')));

app.use(serveStatic(path.join(__dirname, 'tampilan'))) ;
app.use('/css', express.static(__dirname + '/css'))

app.use('/gambar', express.static(__dirname + '/gambar'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/img2', express.static(__dirname + '/img2'))
app.use('/Materi', express.static(__dirname + '/Materi'))
app.use('/uploads', express.static(__dirname + '/uploads'))
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

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session());


//upload file api
// app.post('/uploads',upload_file);
// app.get('/index', open_index_page);//call for main index page


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
// app.use('/Userlist', require('./routes/userlist.js'));



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const customerRoutes = require('./routes/customer-routes');
app.use(customerRoutes.routes)


var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

var imgModel = require('./models/models');


app.get('/foto', (req, res) => {
  imgModel.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
          res.render('foto', { items: items });
      }
  });
});



// Step 8 - the POST handler for processing the uploaded file
  
app.post('/foto', upload.single('image'), (req, res, next) => {
  
  var obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  imgModel.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
          
          res.redirect('/formulir2');
      }
  });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

// function upload_file(req, res, next){
//   if(req.method == "POST") {
//      // create an incoming form object
//      var form = new formidable.IncomingForm();
//      // specify that we want to allow the user to upload multiple files in a single request
//      form.multiples = true;
//      // store all uploads in the /uploads directory
//      form.uploadDir = path.basename(path.dirname('/uploads/json_files/'))
//      // every time a file has been uploaded successfully,
//      // rename it to it's orignal name
//      form.on('file', function(field, file) {
//        fs.rename(file.path, path.join(form.uploadDir, file.name), function(err){
//            if (err) throw err;
//            //console.log('renamed complete: '+file.name);
//            const file_path = '/uploads/'+file.name
//        });
//      });
//      // log any errors that occur
//      form.on('error', function(err) {
//          console.log('An error has occured: \n' + err);
//      });
//      // once all the files have been uploaded, send a response to the client
//      form.on('end', function() {
//           //res.end('success');
//           res.statusMessage = "Process cashabck initiated";
//           res.statusCode = 200;
//           res.redirect('/')
//           res.end()
//      });
//      // parse the incoming request containing the form data
//      form.parse(req);
//    }
// }

// function open_index_page(req, res, next){

//  if(req.method == "GET"){
//       res.render('index.ejs');
//   }
// }




// Ufoto2
// [include Mongo DB]
// [set view engine]
// [Express formidable and FS module]
// [recursive function to upload images]

//
// const formidable = require("express-formidable")
// app.use(formidable({multiples: true, // request.files to be arrays of files
// }))


// const fileSystem = require("fs")
// app.use("/uploads", express.static(__dirname + "/uploads"))

// function callbackFileUpload(images, index, savedPaths = [], success = null) {
//   const self = this

//   if (images.length > index) {

//       fileSystem.readFile(images[index].path, function (error, data) {
//           if (error) {
//               console.error(error)
//               return
//           }

//           const filePath = "uploads/" + new Date().getTime() + "-" + images[index].name
           
//           fileSystem.writeFile(filePath, data, async function (error) {
//               if (error) {
//                   console.error(error)
//                   return
//               }

//               savedPaths.push(filePath)

//               if (index == (images.length - 1)) {
//                   success(savedPaths)
//               } else {
//                   index++
//                   callbackFileUpload(images, index, savedPaths, success)
//               }
//           })

//           fileSystem.unlink(images[index].path, function (error) {
//               if (error) {
//                   console.error(error)
//                   return
//               }
//           })
//       })
//   } else {
//       success(savedPaths)
//   }
// }

// const http = require("http").createServer(app)	
// const mongoClient = require("mongodb").MongoClient;

// app.set('view engine', 'ejs');

// const port = process.env.PORT || 3000

// http.listen(port, function () {
//     console.log("Server started running at port: " + port) 
//     // [connect Mongo DB]
  
//     mongoClient.connect("mongodb://localhost:27017", async function (error, client) {
//       if (error) 
//       {
//           console.error(error)
//           return
//       }
   
//       const db = client.db("multiple_images_upload")
//       console.log("Database connected :)")
   

//       app.get("/ufoto", async function (request, result) {
//         const imagess = await db.collection("images").find({}).toArray()
//         result.render("ufoto", {
//             imagess: imagesss
//         })
//     })
 


    
    
//       // [routes]
//       app.post("/uploadImages", async function (request, result) {
//         const images = []
//         if (Array.isArray(request.files.images)) {
//             for (let a = 0; a < request.files.images.length; a++) {
//                 images.push(request.files.images[a])
//             }
//         } else {
//             images.push(request.files.images)
//         }
      
//         callbackFileUpload(images, 0, [], async function (savedPaths) {
//             await db.collection("images").insertOne({
//                 images: savedPaths
//             })
      
//             result.send("Images has been uploaded.")
//         })
//       })
//     })
// })
