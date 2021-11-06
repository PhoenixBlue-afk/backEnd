const socket = io.connect();

socket.on('messages', (data) => {
    console.log(data)
    renderMensaje(data)
})

const añadirMensaje = ()=>{
    const mensaje = {
        author: document.getElementById('usuario').value,
        text: document.getElementById('texto').value
    }
    socket.emit('new message',mensaje)
    document.getElementById('usuario').value=''
    document.getElementById('texto').value=''
    return false
    
}

const renderMensaje = (messages) =>{
    const html = messages.map((element,index)=>{
        return(`
        <div>
            <strong>${index}-${element.author}</strong>
            <em>${element.text}</em>
        </div>
        `)
    }).join(' ')
    console.log(html);
    document.getElementById('mensajes').innerHTML = html;
}