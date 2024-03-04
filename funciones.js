
$(document).ready(function () {
    // Selecciona el enlace "Conoce Más" por su texto
    $('a:contains("Conoce Más")').click(function (event) {
        event.preventDefault(); // Evita la navegación normal del enlace
        // Desplázate suavemente a la sección de características
        $('html, body').animate({
            scrollTop: $('#caracteristicas').offset().top
        }, 1000); // 1000 milisegundos para la animación (1 segundo)
    });
});
$(document).ready(function () {
    // Selecciona el enlace "Conoce Más" por su texto
    $('a:contains("Nosotros")').click(function (event) {
        event.preventDefault(); // Evita la navegación normal del enlace
        // Desplázate suavemente a la sección de características
        $('html, body').animate({
            scrollTop: $('#descripcion').offset().top
        }, 1000); // 1000 milisegundos para la animación (1 segundo)
    });
});

function redirigir(seleccion) {
        // Determina qué contenedor se hizo clic y crea la URL de redirección
        let url = `ejemplo.html?seleccion=${seleccion}`;
        window.location.href = url; // Redirige a muestra.html con la selección como parámetro
    }
