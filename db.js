import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("BD Connection successful.");
    })
    .catch((err) => {
      console.log(`DB connection error: ${err}`);
    })
  };
  
  export default connectDB;