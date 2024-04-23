import config from "./config.js"
import mongoose from 'mongoose';


const connectDB = () => {
    mongoose.connect(config.app.mongo)
    .then(() => {
      console.log("BD Connection successful.");
    })
    .catch((err) => {
      console.log(`DB connection error: ${err}`);
    })
  };
  
  export default connectDB;