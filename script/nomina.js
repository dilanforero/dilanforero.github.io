document.addEventListener("DOMContentLoaded", function () {

    let calculo = document.getElementById('calculo')

    calculo.addEventListener("click", function(){

        let salariobase = parseInt(document.getElementById('salariobase').value)
        let diurnas = parseInt(document.getElementById('diurnas').value)
        let nocturnas = parseInt(document.getElementById('nocturnas').value)
        let festivo = parseInt(document.getElementById('festivo').value)
        let dominicales = parseInt(document.getElementById('dominicales').value)
        
        let fallas = parseInt(document.getElementById('fallas').value)

        if(salariobase === ""){
            salariobase = 0
        }
        if(diurnas === ""){
            diurnas = 0
        }
        if(nocturnas === ""){
            nocturnas = 0
        }
        if(festivo === ""){
            festivo = 0
        }
        if(dominicales === ""){
            dominicales = 0
        }
        if(fallas === ""){
            fallas = 0
        }

        // esto es lo que gana por hora, asumiendo que trabaja 8horas y 30dias (240horas totales)
        let valorhora = salariobase / 240


        let extradiurna = (valorhora * 1.25) * diurnas
        let extranocturna = (valorhora * 1.35) * nocturnas
        let extrafestivo = (valorhora * 1.75) * festivo
        let extradominical = (valorhora * 2) * dominicales

        let inasistencia = (valorhora * 8) * fallas

        // aqui se consigue el salario total descontando fallas
        let salariototal = salariobase + extradiurna +
                           extranocturna + extrafestivo + 
                           extradominical - inasistencia

        let salud = salariototal * 0.04
        let pension = salariototal * 0.04

        let muestra = document.getElementById('muestra')
        muestra.innerHTML = "<h3>El total a pagar incluyendo salud y pensión es de :</h3> \n <p>$"+ salariototal + 
        "<h3>Pensión:</h3>\n <p>$"+ pension +
        "<h3>Salud:</h3>\n <p>$"+ salud
        muestra.style.background = 'blue'
        muestra.style.color = 'red'
    })
})