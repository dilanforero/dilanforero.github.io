document.addEventListener("DOMContentLoaded", function () {
    let calcularPrecios = document.getElementById("ObservarValores");

    calcularPrecios.addEventListener("click", function () {
        let precios = {
            "PITBULL": 6000000,
            "BULY": 6500000,
            "ROTTWHILLER": 4000000,
            "LABRADOR RETRIEVER": 3500000,
            "GOLDEN RETRIEVER": 3500000,
            "DOBERMAN": 5000000,
            "DOGO ARGENTINO": 5500000,
        };

        let imagenes = {
            "PITBULL": "/img/pitbull.jpg",
            "BULY": "/img/buly.jpg",
            "ROTTWHILLER": "/img/rottwhiller.jpg",
            "LABRADOR RETRIEVER": "/img/labrador.jpg",
            "GOLDEN RETRIEVER": "/img/golden.jpg",
            "DOBERMAN": "/img/doberman.jpg",
            "DOGO ARGENTINO": "/img/dogo.jpg",
        };

        let colores = ["yellow", "silver", "#bf3603"];

        let puesto1 = document.getElementById("puesto1").value.toUpperCase();
        let puesto2 = document.getElementById("puesto2").value.toUpperCase();
        let puesto3 = document.getElementById("puesto3").value.toUpperCase();

        let resultados = document.getElementById("resultados");
        resultados.innerHTML = "";

        let razas = [puesto1, puesto2, puesto3];
        let premios = [2, 0.8, 0.2];

        razas.forEach((raza, index) => {
            if (precios[raza]) {
                let nuevoPrecio = precios[raza] * (1 + premios[index]);
                let puestoDiv = document.createElement("div");
                puestoDiv.className = "puesto";
                puestoDiv.innerHTML = `
                    <h2>Puesto ${index + 1}</h2>
                    <p>Raza: ${raza}</p>
                    <p>Nuevo Precio: $${nuevoPrecio.toLocaleString()}</p>
                    <img src="${imagenes[raza]}" alt="${raza}" style="max-width: 200px; border-radius: 10px;"/>
                `;
                puestoDiv.style.background = colores[index]; 
                resultados.appendChild(puestoDiv);
            }
        });
    });
});
