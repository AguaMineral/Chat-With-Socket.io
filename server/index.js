//Añadir los sockets
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Cargar vista estatica

app.use(express.static('client'));

app.get('/qq',function(req,res){
    res.status(200).send('Que tal mi joanna')
});

var mensajes = [{
    id : 1,
    text: 'Buenas, este es el Whatsapp de pobres.',
    nickname: 'ChatBot'
}];

io.on('connection', function(socket){
    console.log("El equipo: " + socket.handshake.address + " se ha conectado");
    //envia el mensaje al cliente
    socket.emit('mensajes', mensajes);
});

server.listen(6677, function(){
    console.log('Servidor funcionando en http://localhost:6677')
});
