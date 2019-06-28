//Conexion del cliente al socket
var socket = io.connect('http://192.168.1.109:6677',{'forceNew':true});

//recogemos msj
socket.on('mensajes', function(data){
    console.log(data);
    render(data);
});

//funcion que renderiza la info 
function render(data){
    var html = data.map(function(mensaje,index){
        return(`
            <div class="mensaje">
                <strong>${mensaje.nickname}</strong>
                <p>${mensaje.text}</p>
            </div>
        `);
    }).join(' ');

    document.getElementById('mensajes').innerHTML = html;
}