const mongoose = require('mongoose');
module.exports =()=>{
    mongoose.connect('mongodb+srv://aysegul:Sevde2013@cluster0.o5cal.mongodb.net/movieapp-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.on("open",()=>{console.log('Successfully connected to MongoDB')})
mongoose.connection.on('error',()=>{console.log('MongoDB connection was failed...')})
}
