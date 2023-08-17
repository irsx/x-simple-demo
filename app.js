const express = require('express')
const app = express()
app.use(express.json())
const product = require('./produk')
require('dotenv').config()
//var https = require('https')
//let fs = require('fs')

app.get('/xsimple/products', async (req, res) => {
  res.json(product)
})

app.listen(process.env.PORT, () => {
  console.log('service started:' + process.env.PORT)
})

//var privateKey = fs.readFileSync('./ssl/server.key', 'utf8')
//var certificate = fs.readFileSync('./ssl/server.crt', 'utf8')
//var ca = fs.readFileSync('./ssl/server.ca', 'utf8')
//var credentials = { key: privateKey, cert: certificate, ca: ca }
//var httpsServer = https.createServer(credentials, app)
// httpsServer.listen(process.env.PORT, () => {
//  console.log('ISimple Demo started:' + process.env.PORT)
//})