var express = require('express');
var mongoose = require('mongoose');
var db = require('../config/db_connection')();
var MongoClient = require('mongodb').MongoClient;
const router = express.Router();
var providerHandler = require ('../handler/provider_handler');


//delete provider 
router.delete('/:id', function(req, res, next) {
    providerHandler.deleteproviderbyID(req, res,next);
});

//delete providers 
router.delete('/', (req, res, next)=> {
    providerHandler.deleteproviders(req, res);
});

//find provider 
router.get('/:id', (req, res, next)=> {
    providerHandler.findproviderbyID(req, res);
});

//find providers 
router.get('/', (req, res, next)=> {
    providerHandler.findproviders(req, res);
});
//update provider
router.put('/:id', (req, res, next)=>{
providerHandler.updateprovider(req,res,next);
});
//insert provider
router.post('/',(req,res,next)=>{
providerHandler.insertprovider(req,res,next);
});

module.exports = router;   