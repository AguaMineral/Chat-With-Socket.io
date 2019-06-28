//Conexion del cliente al socket
var socket = io.connect('http://192.168.1.109:6677',{'forceNew':true});

//recogemos msj
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

//funcion que renderiza la info 
function render(data){
    var html = data.map(function(message,index){
        return(`
            <div class="message">
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}

function addMessage(evento)
{
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message',message);

    return false;
}