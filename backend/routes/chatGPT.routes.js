const express = require("express");
const app = express();
const db = require('../db')
const { Pool } = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

const {Configuration, OpenAIApi} = require("openai");

const config = new Configuration({
  apiKey:"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",
})

const openai = new OpenAIApi(config);

router.post("/", async(req, res) => {
    const {prompt} = req.body;

    console.log(req.body);
  
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages:[{role:"user", content:prompt}]
    });
  
    console.log(completion.data.choices[0].message.content);
    res.send(completion.data.choices[0].message.content);
})
  
module.exports = router;