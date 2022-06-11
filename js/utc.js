
var utc = 0

function mais() {
    utc ++
    if (utc > 11) {
        utc = -12
    }
}
function menos() {
    utc --
    if(utc < -12) {
        utc = 11
    }
}

setInterval(show, 1000);

function show() {

var data = new Date()
var horaUtc = data.getUTCHours()
var minUtc = data.getUTCMinutes()
var segsUtc = data.getUTCSeconds()
var gmt = document.getElementById('gmt')

if (horaUtc + utc > 23) {
 var exibeHora = `${horaUtc+utc-24}:${minUtc}:${segsUtc}`
}
else if (horaUtc + utc < 0) {
 var exibeHora = `${24+(horaUtc+utc)}:${minUtc}:${segsUtc}`
}
else {
    var exibeHora = `${horaUtc+utc}:${minUtc}:${segsUtc}`
}

switch (utc) {
    case -12:
    gmt.innerHTML = `UTC -12 Ilha Baker ${exibeHora}`
    break
    case -11:
    gmt.innerHTML = `UTC -11 Niue ${exibeHora}`
    break
    case -10:
    gmt.innerHTML = `UTC -10 Havaí ${exibeHora}`
    break
    case -9:
    gmt.innerHTML = `UTC -9 Polinésia ${exibeHora}`
    break
    case -8:
    gmt.innerHTML = `UTC -8 Califórnia ${exibeHora}`
    break
    case -7:
    gmt.innerHTML = `UTC -7 La Paz ${exibeHora}`
    break
    case -6:
    gmt.innerHTML = `UTC -6 Guadalajara ${exibeHora}`
    break
    case -5:
    gmt.innerHTML = `UTC -5 Haiti ${exibeHora}`
    break
    case -4:
    gmt.innerHTML = `UTC -4 Cuiabá ${exibeHora}`
    break
    case -3:
    gmt.innerHTML = `UTC -3 Brasilia ${exibeHora}`
    break
    case -2:
    gmt.innerHTML = `UTC -2 Groelândia ${exibeHora}`
    break
    case -1:
    gmt.innerHTML = `UTC -1 Cabo Verde ${exibeHora}`
    break
    case 0:
    gmt.innerHTML = `UTC  0 Londres ${exibeHora}`
    break
    case 1:
    gmt.innerHTML = `UTC  +1 Barcelona ${exibeHora}`
    break
    case 2:
    gmt.innerHTML = `UTC  +2 Egito ${exibeHora}`
    break
    case 3:
    gmt.innerHTML = `UTC  +3 Quênia ${exibeHora}`
    break
    case 4:
    gmt.innerHTML = `UTC  +4 Dubai ${exibeHora}`
    break
    case 5:
    gmt.innerHTML = `UTC  +5 Maldivas ${exibeHora}`
    break
    case 6:
    gmt.innerHTML = `UTC  +6 Bangladesh ${exibeHora}`
    break
    case 7:
    gmt.innerHTML = `UTC  +7 Jakarta ${exibeHora}`
    break
    case 8:
    gmt.innerHTML = `UTC  +8 Xangai ${exibeHora}`
    break
    case 9:
    gmt.innerHTML = `UTC  +9 Tóquio ${exibeHora}`
    break
    case 10:
    gmt.innerHTML = `UTC  +10 Papua New Guinea ${exibeHora}`
    break
    case 11:
    gmt.innerHTML = `UTC  +11 Micronésia ${exibeHora}`
    break
}
}
