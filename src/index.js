const express = require('express')
const {PORT} = require("./config/serverConfig.js")

const setupAndStartServer = ()=>{
    const app = express()

    

    app.listen(process.env.PORT,()=>{
        console.log(`server started at ${PORT}`)
        
    })
}

setupAndStartServer()