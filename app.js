const express = require('express')
const app = express()
app.use(express.json())
const product = require('./produk')
const productdata = require('./produkdata')
const productdatainject = require('./produkdatainject')
require('dotenv').config()
//var https = require('https')
//let fs = require('fs')

app.get('/xsimple/products', async (req, res) => {
  console.log(req.query);
  if(req.query.tipe == 'data'){
    res.json(productdata)
  }else{
      if(req.query.tipe == 'inject'){
         res.json(productdatainject)
      }else{
        res.json(product)
      }
  }
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