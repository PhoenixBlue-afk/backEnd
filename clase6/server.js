const express = require('express')
const {Server:HTTPServer} = require('http')
const {Server: SocketServer} = require('socket.io')
const app = express()
const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)
const {getMensaje, saveMessages} = require('./models/messages.js')



app.use(express.static('public'))

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    const mensaje = getMensaje()
    socket.emit('messages', mensaje )

    socket.on('new message', message =>{
        saveMessages(message)
        const allMessages = getMensaje()
        io.sockets.emit('messages', allMessages)

    })

})

const PORT = 3000
const conectedServer = httpServer.listen(PORT, ()=>{
    console.log(`Servidor HTTP con Websocket escuchando desde el puerto ${conectedServer.address().port}`)
})

conectedServer.on('error', err => console.log(`Error en Servidor: ${err}`))