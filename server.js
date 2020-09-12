const axios = require('axios')
const http = require('http')


const server = http.createServer((request,response) => {
    axios.get('https://api.unsplash.com/photos/random?client_id=fdd5242afd287cdedee10ec1ffb000488dbf569fb0a93b886556a61f767d34fb')
    .then (response => response.data)
    .then(data =>{
        response.setHeader("content-type","text/html;charset=utf-8")
        response.end(`<img src="${data.urls.regular}">`)
    })
})
server.listen(3000)