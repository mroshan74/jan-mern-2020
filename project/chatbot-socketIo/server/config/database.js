const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/chatbot-db',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(()=>{console.log('connected to chatbot-db...')})
        .catch((err) => console.log(err))
}

module.exports = configureDB