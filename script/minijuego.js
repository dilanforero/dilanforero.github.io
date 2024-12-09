document.addEventListener("DOMContentLoaded", function(){

    let comprobar = document.getElementById("comprobar")

    comprobar.addEventListener("click", function(){

        let pregunta1 = document.getElementById("pregunta1").value
        let pregunta2 = document.getElementById("pregunta2").value
        let pregunta3 = document.getElementById("pregunta3").value

        if(pregunta1 === "si"){
            if (pregunta2 === "si"){
                if (pregunta3 === "si"){

                    let respuesta = document.getElementById("respuesta")

                    respuesta.innerHTML= "<h2>¡Felcididades, haz ganado!"
                    respuesta.style.background = "yellow"
                    respuesta.style.color = "green"
                }else{
                    let respuesta = document.getElementById("respuesta")
    
                        respuesta.innerHTML= "<h2>¡Lastima :(, haz perdido!"
                        respuesta.style.background = "red"
                        respuesta.style.color = "black"
                }
            }else{
                let respuesta = document.getElementById("respuesta")

                    respuesta.innerHTML= "<h2>¡Lastima :(, haz perdido!"
                    respuesta.style.background = "red"
                    respuesta.style.color = "black"
            }
        }else{
            let respuesta = document.getElementById("respuesta")

                respuesta.innerHTML= "<h2>¡Lastima :(, haz perdido!"
                respuesta.style.background = "red"
                respuesta.style.color = "black"
        }
    })
})