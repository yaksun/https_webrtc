const fs = require('fs')
const https = require('https')
const http = require('http')
const express = require('express') 
const serverIndex = require('serve-index')

const app = express(); 
app.use(serverIndex('./public'))
app.use(express.static('./public'))

var http_server = http.createServer(app)
http_server.listen(80,'0.0.0.0')

const options = {
    key:fs.readFileSync('./cert/4809780_www.yaksun.icu.key'),
    cert:fs.readFileSync('./cert/4809780_www.yaksun.icu.pem')
}

var https_server = https.createServer(app)
https_server.listen(443,'0.0.0.0')


console.log('服务器启动中......');

