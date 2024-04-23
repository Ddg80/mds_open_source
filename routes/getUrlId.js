import express from "express";
import Url from '../models/Url.js';

const router = express.Router();

export default router.get("/:shorturlid", async function(req,res){
  const urlId = req.path.substring(1)
  try {
    const url = await Url.findOne({ urlId: urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    res.status(500).json('Server Error');
  }
});