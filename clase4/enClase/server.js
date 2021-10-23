const express = require('express')
const app = express()
const frase = 'Hola mundo primera frase'
let palabras = ['Hola', 'Mundo']

app.use(express.json())

app.get('/api/frase', (req, res)=>{
    return res.json(frase)
})

app.get('/api/letras/:num', (req, res)=>{
    const num = parseInt(req.params.num)

if (isNaN(num)) {
    return res.send ( {error : 'El parametro enviado no es un numero'})    
}else if (num < 1 || num > frase.length) {
    return res.send( {error: 'El parametro esta fuera de rango'})
}
res.json({frase: frase[num-1]})

})

app.get('/api/palabras/:num', (req, res)=>{
    const num = parseInt(req.params.num)
    const palabras = frase.split(' ')
    if (isNaN(num)) {
        return res.json({error: 'El parametro ingresado no es un numero'})
    }else if (num < 1 || num > frase.length) {
        return res.json ({error: 'El parametro esta fuera de rango'})
    }
    res.json({palabra: palabras[num-1]})
})


app.post('/api/palabras', (req, res)=>{
    const {palabra} = req.body
    palabras.push(palabra)
    res.json({agregada: palabra, posicion: palabras.length-1})
})

app.put('/api/palabras/:pos', (req,res)=>{
    const {palabra} = req.body
    const {pos} = req.params
    const palabraAnt = palabras[parseInt(pos)-1]
    palabras[parseInt(pos)-1] = palabra
    res.json({actualizada: palabra, anterior: palabraAnt})
})

app.delete('/api/palabras/:pos', (req, res)=>{
    const {pos} = req.params
    const palabra = palabras.splice(parseInt(pos)-1,1)
    res.json({borrada: palabra})
})


const server = app.listen(8080,()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on('error', error =>{
    console.log(`Error en el servidor ${error}`);
})