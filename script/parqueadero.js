document.addEventListener("DOMContentLoaded", function(){

    let calcular = document.getElementById('calcular');

    calcular.addEventListener("click", function(){

        let hora = parseInt(document.getElementById('hora').value)
        let minuto = parseInt(document.getElementById('minuto').value)

        let dinero = minuto
        if(dinero>= 1){
            dinero = 1500
        }
        let pago = (hora * 1500) + dinero
        

        let muestra = document.getElementById("muestra")

        muestra.innerHTML = "<h2>El total a pagar por estar "+ hora+ " hora(s) y "+minuto+" minuto(s) es de: \n $"+ pago
    })
})