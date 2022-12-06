
import users from "./routes/users.js";


import cors from "cors";

// formulir 

mongoose.connect('mongodb://localhost:27017/fullstack_db',
{ useNewUrlParser: true ,useUnifiedTopology: true}
);
const dbs= mongoose.connection;


dbs.on('error', (error) => console.log(error));
dbs.once('open', () => console.log('database 2 terhubung ...'));

app.use(cors());
app.use(express.json());

app.use(users);