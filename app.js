// const fs = require("fs")

// fs.writeFileSync("test.txt", "Hello i am learning nodeJS.")

const getNotes = require("./notes.js")

console.log(getNotes())

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/',(req, res) => {
    res.send({
        name: "nimesh"
    })
})

app.listen(port,() => {
    console.log("Server is connected to port " + port)
})