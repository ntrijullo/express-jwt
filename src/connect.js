const mongoose = require('mongoose')
const {mongodb} = require('./config')

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db)=>{
    console.log('Conexión ok')
}).catch((err)=>{
    console.log('Problemas en la conexión')    
})

module.exports = connection