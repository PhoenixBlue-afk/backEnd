const express = require('express')
const app = express()
const {promises: fs} = require('fs')



app.engine('ntl', async (filePath, options, callback)=>{
    try{
        const content = await fs.readFile(filePath) 
        const rendered = content.toString()
        .replace('^^nombre$$', options.nombre)
        .replace('^^precio$$', options.precio)
        .replace('^^thumbnail$$', options.thumbnail)
        return callback (null, rendered)
    }catch (err) {
        return callback(new Error(err))
    }
    
    
})
app.set('views', './views')
app.set('view engine', 'ntl')
        const contexto = 
            {nombre: 'Maruchan',
            precio: 300,
            thumbnail:'Nada aqui'
            }
        const contexo0=
            {nombre: 'Fideos',
            precio: 20,
            thumbnail:'Tampoco aqui'
            }


app.get('/contexto', (req,res)=>{
    res.render('index',contexto)
})
app.get('/contexto0', (req,res)=>{
    res.render('index',contexo0)
})
const PORT=8080
const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando al Puerto ${server.address().port}`);
})