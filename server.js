require("dotenv").config()
const PORT = process.env.PORT
const breadsController = require("./controllers/breads_controller.js")
const express = require("express")
const app = express()

app.use("/breads", breadsController)

app.get("/", (req, res) => {
    res.send("Welcome to an Awesome App about Breads!")
})

app.listen(PORT, () => {
    console.log(`Listening on port:`, PORT)
})

