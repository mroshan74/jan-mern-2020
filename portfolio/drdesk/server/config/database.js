const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/drdesk-db',{
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
        .then(()=>{
            console.log('connected to db -> drdesk-db')
        })
        .catch((err)=> {
            console.log(err)
        })
}

module.exports = configureDB