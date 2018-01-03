'use strict';
var db = require('../config/db_connection')();
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Schema_specialities = new Schema({
    Name: String,
    createBy: Number,
    createAt: Date,
    updatedBy: Number,
    updatedAt: Date
});
module.exports = mongoose.model("Specialities", Schema_specialities); 
/*
var spe = mongoose.model("Specialities", Schema_specialities);
module.exports=spe;*/