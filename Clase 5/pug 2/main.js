const express = require('express')
const app = express()


app.set('views', './views')
app.set('views engine', 'pug')

app.get('/datos', (req,res)=>{
    res.render('nivel', req.query)
})

const PORT=8080
const server = app.listen(PORT, ()=> console.log(`Servidor iniciado en el puerto ${server.address().port}`))
server.on('error', error=> console.log(`Error en el servidor ${error}`))