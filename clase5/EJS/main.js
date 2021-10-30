const express = require('express')
const app=express()

app.set('views', './views')
app.set('views engine', 'ejs')

app.get('/datos', (req,res)=>{
    res.render('index',req.query)
})


app.listen(8080)