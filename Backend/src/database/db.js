const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0vgkdn6.mongodb.net/`, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function () {
    console.log('Connected');
}).on('error', function (error) {
    console.log('Connection error: ' + error);
});


module.exports = mongoose;