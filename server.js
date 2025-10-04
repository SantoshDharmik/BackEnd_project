import express from "express"

import dotenv from "dotenv"


dotenv.config({path: "./config.env"})

let app = express()

let port = process.env.port


app.get((req,res) => {
    console.log("someone is trying to access a 404 route !")
    res.status(404).json({
        message:"content not found ! "
    })
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})