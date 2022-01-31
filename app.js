// const fs = require("fs")

// fs.writeFileSync("test.txt", "Hello i am learning nodeJS.")

const getNotes = require("./notes.js")

console.log(getNotes())

const express = require('express')

const app = express()

app.get('/',(req, res) => {
    res.send({
        name: "nimesh"
    })
})

app.listen(3000,() => {
    console.log("Server is connected")
})