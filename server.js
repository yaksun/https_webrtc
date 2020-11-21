const fs = require('fs')
const https = require('https')

const options = {
    key:fs.readFileSync('./cert/4809780_www.yaksun.icu.key'),
    cert:fs.readFileSync('./cert/4809780_www.yaksun.icu.pem')
}

const app = https.createServer(options,function(res,req){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello')
})

app.listen(443,'0.0.0.0')