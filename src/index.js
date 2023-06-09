const express = require('express')
const connection = require('./connect')
const userRoutes = require('./routes/users')
const app = express()

app.set('port',3000)
app.use(express.urlencoded({extended: false}))
app.use(userRoutes)
app.listen(app.get('port'),()=>{
    console.log('App sobre puerto '+app.get('port'))
})