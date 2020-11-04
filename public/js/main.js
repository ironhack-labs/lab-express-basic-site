// Código escrito y diseñado por Tomás Scattini en la ciudad de Melbourne, Australia durante la cuarentena del año 2020 
// Code written and designed by Tomás Scattini in Melbourne, Australia on the 2020's quarantine
// Instagram: @tomiscattini
// E-mail: tomasscattini@gmail.com

(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        // Mapa 

        var map = L.map('mapa').setView([-34.910077, -57.966726], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-34.910077, -57.966726]).addTo(map)
            .bindTooltip('TGSAgrimensura<br>Calle 38 N807 1/2 - depto 3 e/ 11 y 12<br>La Plata, Bs.As., Argentina, 1900')
            .openTooltip();


    });
})();


$(function() {
    // Navegacion

    $('.navegacion-movil').on('click', function() {
        $('.navegacion').slideToggle();
        return false;
    });

});