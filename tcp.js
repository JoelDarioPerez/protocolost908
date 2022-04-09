const net = require('net');

const server = net.createServer();

server.on('connection', (socket)=> {
    socket.on('data', (data)=>{
        console.log(`mensage recibido desde el cliente ${data}`)
    })
    socket.on('close', ()=> {
        console.log('Comunicacion finalizada');
    })
    socket.on(err.message)

    })
server.listen(1812, ()=> {
    console.log('El servidor esta escuchando en el puerto', server.address().port)
})

