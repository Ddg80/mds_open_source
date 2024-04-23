import express from "express";
import Url from '../models/Url.js';

const router = express.Router();

export default router.get("/get-all-short-urls",async function(req,res){
    try {
      const url = await Url.find();
      console.log("getALLUrl" , url);
      res.json(url)
    } catch (err) {
      console.log("getALLUrl" , err);
      res.status(500).json('Server Error');
    }
  });