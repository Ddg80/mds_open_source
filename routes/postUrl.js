import config from "../config.js";
import express from "express";
import { nanoid } from "nanoid";
import Url from '../models/Url.js';
import { isValidUrl } from '../utils/utils.js';

const router = express.Router();

export default router.post("/create-short-url", async function (req, res) {
  const origUrl = req.body.longurl;
  const urlId = nanoid();
  const base = config.app.base;
  console.log("POST URL", base);
  if (isValidUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log("POST URL", err);
      res.status(500).json("Server Error");
    }
  } else {
    console.log("ELSE POSTURL", res);
    res.status(400).json("Invalid Original Url");
  }
});