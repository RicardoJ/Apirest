'use strict';
var express = require('express');
var mongoose = require('mongoose');
var db = require('../config/db_connection')();
var objectId = require('mongodb').ObjectID;
const providerModel = require('../models/model_provider');
const specialtiesModel = require('../models/model_specialties');
const router = express.Router();


//delete provider y ID , deleteproviderbyID
exports.deleteproviderbyID = (req, res, next) => {
    let id = req.params.id;
    providerModel.remove({
            _id: id
        },
        (err, providersCL) => {
            if (err) throw err;
            res.status(200).json(providersCL);
            console.log("REMOVED");
        });
};

//delete providers, deleteproviders
exports.deleteproviders = (req, res, next) => {
    providerModel.remove({}, (err, providersCL) => {
        if (err) throw err;
        res.status(200).json(providersCL);
    });
};


//find provider y ID GET
exports.findproviderbyID = (req, res, next) => {
    let id = req.params.id;
    providerModel.findOne({
        _id: id
    }, (err, providersCL) => {
        if (err) res.send(err);
        res.status(200).json(providersCL);

    });
};

//find providers GET
exports.findproviders = (req, res, next) => {
    let speciality_in_provider = req.params.speciality;
    providerModel.find({}, (err, providersCL) => {
        specialtiesModel.populate(providerModel, {
            path: "speciality"
        }, (err, providerModel) => {
            if (err) throw err;
            res.status(200).json(providersCL);

        });
    })

};

//update by id a provider PUT
exports.updateprovider = (req, res, next) => {
    let id = req.params.id;
    providerModel.findByIdAndUpdate(id, req.body, {
            new: true
        },
        (err, providersCL) => {
            if (err) res.status(400).send(err);
            res.status(200).json(providersCL);
            console.log(req.body);
        });
};

//insert provider POST
exports.insertprovider = (req, res, next) => {

    let providern = (req.body);
    specialtiesModel.findOne({
        name: req.params.speciality
    }, (err, speciality) => {
        if (err) res.status(400).send(err);
        providern.speciality = speciality;
        providerModel.create(providern, (err, providers) => {
            if (err) return handleError(err)
            res.status(200).json(providers);
        });
    })
};
/*
exports.insertprovider = (req, res, next) => {
    providerModel.create(req.body,(err,providersCL)=>{
        if(err) res.status(400).send(err);
        res.status(200).json(providersCL);
    })

        
    };
*/