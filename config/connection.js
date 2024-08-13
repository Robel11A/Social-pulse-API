const mongoose = require('mongoose');

mongoose.connect ('mongodb://localhost/socialpulseapi');
 


module.exports = mongoose.connection;
