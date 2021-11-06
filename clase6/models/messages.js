let messages = [
    {author: 'Ricardo', text: 'Hola, como estan?'},
    {author: 'Alejandra', text: 'Que cuentan amigos?'},
    {author: 'Jose', text: 'HOLAAAAAAA'}
]

getMensaje = ()=>{
    return messages
}

saveMessages = message => {
    messages.push(message)
}

module.exports ={
    getMensaje,
    saveMessages
}
