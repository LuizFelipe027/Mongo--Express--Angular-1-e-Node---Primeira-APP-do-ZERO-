const http = require('http')

const server = http.createServer(function(req, res){
        res.writeHead(200, {"content-type": "text/html"})
        res.end('<h1>Acho melhor usar o Express</h1>')
})

const porta = 3456
server.listen(porta, () => {
    console.log(`Escutando a porta: ${porta}`)
})