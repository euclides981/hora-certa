setInterval(horaCidades, 1000);

function horaCidades() {
    var dataCidades = new Date()
    var horaCidades = dataCidades.getUTCHours()
    var minCidades = dataCidades.getUTCMinutes()
    var segsCidades = dataCidades.getUTCSeconds()

    var joan = document.getElementById('hora_joanesburgo')
    var moscow = document.getElementById('hora_moscow')
    var aruba = document.getElementById('hora_aruba')


    if(horaCidades < 10) {
        horaCidades = '0'+ horaCidades
    }
    if(minCidades < 10) {
        minCidades = '0'+ minCidades
    }
    if(segsCidades < 10) {
        segsCidades = '0'+ segsCidades
    }
    
    joan.innerHTML = `${horaCidades+2}:${minCidades}:${segsCidades}`
    moscow.innerHTML = `${horaCidades+3}:${minCidades}:${segsCidades}`
    aruba.innerHTML = `${horaCidades-4}:${minCidades}:${segsCidades}`

}
