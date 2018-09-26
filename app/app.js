const express = require("express")
const fs = require("fs")

const app = express()

app.get("/info", (request, response, next) => {
  const body = {
    version: process.env.APP_VERSION,
    instance_name: process.env.INSTANCE_NAME,
    secret_key: process.env.SECRET_KEY,
    file: fs.existsSync("./extra.json")
  }
  response.status(200).send(body)
})

app.get("/ready", (request, response, next) => {
  response.status(200).send("Ready!")
})

app.get("/alive", (request, response, next) => {
  response.status(200).send("Alive!")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
