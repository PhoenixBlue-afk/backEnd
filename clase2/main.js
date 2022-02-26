const fs = require('fs');

class DataBase{
    constructor (name, id, description, price){
        this.name = name
        this.id = id
        this.price = price
        this.description = description
        this.all = name, id, description, price
    }

    getAll = async () =>{
        try {
            const contenido = await fs.promises.readFile(this.all, 'utf-8')
            return JSON.parse(contenido)
        } catch (error) {
            const contenido = await fs.promises.writeFile(this.all, JSON.stringify([]))
            return JSON.parse(contenido)
        }
    }

    
    save = async producto =>{
        const arrayProducto = await this.getAll()
        
        arrayProducto.push(producto)

        try {
            await fs.promises.writeFile(this.all, JSON.stringify(arrayProducto))
            return producto.name
        } catch (error) {
            throw new Error ('No se guardo el producto')
        }

    }
    getById = async name =>{
        const arrayProducto = await this.getAll();
        productoBuscado = arrayProducto.find(p => p.name.toUpperCase() === name.toUpperCase())
        return productoBuscado
    }

    deleteAll = async ()=>{
        await fs.promises.writeFile(this.all, JSON.stringify(arrayProducto, null, 2))
    }
} 
const db = new DataBase('stock')

const test = async ()=>{
    console.log(await db.getAll());
    console.log(await db.save({name: 'papel', id:'0', price: 100, description:'hola'}));
    console.log(await db.getById());
}

test()