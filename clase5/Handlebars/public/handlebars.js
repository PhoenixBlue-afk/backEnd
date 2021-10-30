const  render = async () => {
    const response = await fetch('plantilla.txt')
    const templateStr = await response.text()
        const template = Handlebars.compile(templateStr)
        const context = 
            {nombre: 'Maruchan',
            precio: 300,
            thumbnail:'Nada aqui'
            }
        const contex0=
            {nombre: 'Fideos',
            precio: 20,
            thumbnail:'Tampoco aqui'
            }
            const html = template(context)
            const html0 = template(contex0)
            document.querySelector('span').innerHTML = html + html0
        }
        
    
    render()
