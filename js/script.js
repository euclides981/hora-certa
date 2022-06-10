setInterval(showTime, 1000);

function showTime() {
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segs = data.getSeconds()
    var msg = document.getElementById('msg')

    msg.innerHTML = `Hora Local: ${hora}:${minutos}:${segs}`
}