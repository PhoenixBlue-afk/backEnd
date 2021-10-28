const {Router} = require ('express')

const routerProductos = Router()

const productos = [
    {nombre: 'Maruchan',
    precio: 300,
    thumbnail:''
    },
    {
        nombre: 'Fideos',
        precio: 20,
        thumbnail:''
    }
]

let i = 0
productos.forEach(element => {
    element.id = i
    i ++
});

routerProductos.get('/', (req, res)=>{
    res.json(productos)
})

routerProductos.get('/:num', (req, res)=>{
    const num = parseInt(req.params.num)
    if (productos[num]) {
        res.json(productos[num])
    }else{
        res.json("El producto no existe")
    }
})

routerProductos.post('/', (req, res)=>{
    let objeto = req.body
    objeto.id = productos.length + 1
    productos.push(req.body)
    res.json(req.body)
})

routerProductos.put('/:id', (req,res)=>{
        const {nombre, precio, thumbnail} = req.body
        const {id} = req.params
        const idAnterior = productos[parseInt(id)-1]
        productos[parseInt(id)-1] = {nombre: nombre, precio: precio, thumbnail: thumbnail, id: id}
        res.json({actualizada: productos[parseInt(id)-1], anterior: idAnterior})
})

routerProductos.delete('/:id', (req, res)=>{
    const {id} = req.params
    const producto = productos.splice(parseInt(id)-1,1)
    res.json({borrada: producto})
})

module.exports = routerProductos