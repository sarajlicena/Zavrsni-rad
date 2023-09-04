const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../db');
const User = require("../models/UserModel");

router.post("/", (req, res, next) => {
  (async () => {
    let result = await User.checkEmail(req.body.email);
    if (result == null) {
      res.status(501);
      return;
    }

    result = await User.checkPassword(req.body.email, req.body.password);
    console.log("U LOGIJU SAM" + result)


    if (result.length === 0 || result==null) {
      res.status(501);
      res.send("Incorrect password");
      return;
    }
    res.send(result[0]);
  })();
});

module.exports = router;