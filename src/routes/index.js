const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient; 
var db = require('../config/db_connection')();
// Homepage
router.get('/', (req, res, next) => {
    res.render('index', {
        tittle: 'Web CondorLabs'
    });
});

module.exports = router;