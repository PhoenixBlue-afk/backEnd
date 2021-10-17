const express = require ('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hola, enviado desde express')
})
app.get('/algo', (req, res)=>{
    res.send('Hola con algo, enviado desde express')
})
const server = server.listen(8080, ()=>{
    console.log(`Conectado al puerto ${srvConnection.address().port}`);
})

server.on('error', (error)=>{
    console.log(error);
    console.log('hubo un error ...');
})