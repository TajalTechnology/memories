const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('dotenv').config()




const app = express();
app.use(bodyParser.json({limit:"29mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"29mb", extended:true}));
app.use(cors());

// database configurations
const connectDB = require('./config/db.config');
connectDB();

// customize routers
const postRouter = require('./routes/posts')


// end-point roots
app.use('/api', postRouter)

// port
app.listen(process.env.PORT || 3005)




