const express = require ('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080

app.use(express.static('public'))


const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando al Puerto ${server.address().port}`);
})