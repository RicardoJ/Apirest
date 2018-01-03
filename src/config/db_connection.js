const mongoose = require('mongoose');
let db;

module.exports = () => {
    if (!db) {
        
        db = mongoose.connect('mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1');
        useMongoClient: true 
    }
  
    return db;
};