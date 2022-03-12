const express = require ('express')
const routerProductos = require ("./productos.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/productos', routerProductos)


const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on('error', error =>{`Error en el servidor ${error}`})