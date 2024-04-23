import express from "express";
import Url from '../models/Url.js';

const router = express.Router();

export default router.get("/:shorturlid", async function(req,res){
  const urlId = req.path.substring(1)
  try {
    const url = await Url.findOne({ urlId: urlId });
    console.log("GetUrlId 1", url);
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      console.log("GetUrlId 2", url.origUrl);
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log("GetUrlId 3", err);
    res.status(500).json('Server Error');
  }
});