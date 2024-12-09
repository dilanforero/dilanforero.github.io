document.addEventListener("DOMContentLoaded", function() {
    let calcular = document.getElementById('calcular');

    calcular.addEventListener("click", function(event) {
        // Obtener valores de los inputs
        let modelo = document.getElementById('modelo').value.toLowerCase();
        let dias = parseInt(document.getElementById('dias').value);
        let seguro = document.getElementById('seguro').value.toLowerCase();

        // Precios de alquiler
        let precios = {
            bmw: 650000,
            megane: 120000,
            mercedes: 700000,
            twingo: 100000,
            chevrolet: 150000
        };

        // URLs de las imágenes
        let imagenes = {
            bmw: "img/bmw.jpg",
            megane: "img/megane.jpg",
            mercedes: "img/mercedes.jpg",
            twingo: "img/twingo.jpg",
            chevrolet: "img/chevrolet.jpg"
        };

        let alquilerSin = dias * precios[modelo];

        
        let conDescuento = alquilerSin;
        if (dias >= 11) {
            conDescuento *= 0.8;
        } else if (dias >= 6) {
            conDescuento *= 0.85;
        } else if (dias >= 3) {
            conDescuento *= 0.9;
        }


        let valorPagar = seguro === "si" ? conDescuento * 1.05 : conDescuento;

        let resultado = document.getElementById("resultado");
        if (dias <= 2) {
            resultado.style.backgroundColor = "orange";
        } else if (dias >= 3 && dias <= 5) {
            resultado.style.backgroundColor = "yellow";
        } else if (dias >= 6 && dias <= 10) {
            resultado.style.backgroundColor = "green";
        } else if (dias > 10) {
            resultado.style.backgroundColor = "blue";
        }

        resultado.innerHTML = `
            <p>Modelo: ${modelo}</p>
            <p>Días de alquiler: ${dias}</p>
            <p>Seguro: ${seguro}</p>
            <p>Valor a pagar: $${valorPagar.toFixed(2)}</p>
            <img src="${imagenes[modelo]}" alt="Imagen de ${modelo}" style="max-width:300px; margin-top:10px;">
        `;
    });
});
