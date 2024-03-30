import express from "express";
import Url from "../models/Url";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
dotenv.config({ path: ".env" });

const router = express.Router();

router.post("/post", async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  const urlId = nanoid();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;
        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

module.exports = router;
