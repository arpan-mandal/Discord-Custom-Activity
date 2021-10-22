const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=dsc.gg/blu-"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive
© 2021 GitHub, Inc.
Terms
Privacy
Security
S
