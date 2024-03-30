import express from 'express';
import connectDB from './db.js';
import Url from './models/Url.js';
const app = express();

// Router
import postUrlRouter from './routes/postUrl.js'
import getAllUrls from './routes/getAllUrls.js'
import getUrlId from './routes/getUrlId.js'

connectDB();

// Server Setup
const PORT = process.env.PORT || 3333;

// Config app
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(express.json())

app.get("/",function(request,response){
	response.sendFile(__dirname + "/public/index.html");
});

app.use('/api', postUrlRouter)
app.use('/api', getAllUrls)
app.use('/api', getUrlId)

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});