const express = require('express')
const {PORT} = require("./config/serverConfig.js")
const bodyParser = require('body-parser')
const {Airport, City, Airplane} = require('./models/index.js')
const db = require('./models/index.js')
const sequelize = require('sequelize')

const ApiRoutes = require('./routes/index')

const setupAndStartServer = ()=>{
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.use('/api', ApiRoutes)
    
    
    app.listen(process.env.PORT,async()=>{
        console.log(`server started at ${PORT}`)
        
        if(process.env.SYNC_DB){
            db.sequelize.sync({alert: true})
        }

    })
}

setupAndStartServer()