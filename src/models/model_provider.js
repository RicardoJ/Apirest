'use strict';
var db = require('../config/db_connection')();
const specialtiesModel = require('../models/model_specialties');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Schema_provider = new Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    projectedStartDate: String,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    createBy: Number,
    createAt: Date,
    updatedBy: Number,
    updatedAt: Date,
    speciality: {}
});
module.exports = mongoose.model("Providers", Schema_provider);