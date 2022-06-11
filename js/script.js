setInterval(showTime, 1000);

function showTime() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var segs = data.getSeconds()
    var msg = document.getElementById('msg')

    if(hora < 10) {
        hora = '0'+ hora
    }
    if(min < 10) {
        min = '0'+ min
    }
    if(segs < 10) {
        segs = '0'+ segs
    }

    msg.innerHTML = `Hora Local: ${hora}:${min}:${segs}`
}