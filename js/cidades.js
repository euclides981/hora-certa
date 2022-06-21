setInterval(horaCidades, 1000)

function horaCidades() {
    
    var londres = document.getElementById('hora_londres')
    var moscow = document.getElementById('hora_moscow')
    var aruba = document.getElementById('hora_aruba')
    var joan = document.getElementById('hora_joanesburgo')
    var toronto = document.getElementById('hora_toronto')
    var mumbai = document.getElementById('hora_mumbai')

    var data = new Date()
    var minCidades = data.getMinutes()
    var segsCidades = data.getSeconds()
    var utcOffset = data.getTimezoneOffset()
    
    //Hora de Londres
    data.setMinutes(data.getMinutes() + utcOffset)
    var horaLondres = data.getHours()
    
    var utcJoanesburgo = 2*60
    data.setMinutes(data.getMinutes() + utcJoanesburgo)
    var horaJoanesburgo = data.getHours()

    var utcMoscow = 1*60
    data.setMinutes(data.getMinutes() + utcMoscow)
    var horaMoscow = data.getHours()
    
    var utcAruba = -7*60 //utc -4
    data.setMinutes(data.getMinutes() + utcAruba)
    var horaAruba = data.getHours()
    
    var utcToronto = 0*60 //utc -4
    data.setMinutes(data.getMinutes() + utcToronto)
    var horaToronto = data.getHours()
    
    var utcMumbai = 9.5*60 //utc -4
    data.setMinutes(data.getMinutes() + utcMumbai)
    var horaMumbai = data.getHours()
    var minMumbai = data.getMinutes()
    if(minMumbai < 10) {
        `0${minMumbai}`
    }

    if(minCidades < 10) {
        minCidades = `0${minCidades}`
    }
    if(segsCidades < 10) {
        segsCidades = `0${segsCidades}`
    }

    londres.innerHTML = `${horaLondres}:${minCidades}:${segsCidades}`
    joan.innerHTML = `${horaJoanesburgo}:${minCidades}:${segsCidades}`
    moscow.innerHTML = `${horaMoscow}:${minCidades}:${segsCidades}`
    aruba.innerHTML = `${horaAruba}:${minCidades}:${segsCidades}`
    toronto.innerHTML = `${horaToronto}:${minCidades}:${segsCidades}`
    mumbai.innerHTML = `${horaMumbai}:${minMumbai}:${segsCidades}`
}
