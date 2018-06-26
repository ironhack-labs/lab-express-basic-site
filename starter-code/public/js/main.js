$(()=>{
    $(".galleryElement").mouseenter((e) => {
        let x = document.getElementById("descriptionBox");
        x.style.visibility = "visible";
        fillText(e);
    });
    $("#descriptionBox").mouseout((e) => {
        let x = document.getElementById("descriptionBox");
        x.style.visibility = "hidden";
    });
    $("#descriptionBox").mouseenter((e) => {
        let x = document.getElementById("descriptionBox");
        x.style.visibility = "visible";
    });
    $(".galleryElement").mouseout((e) => {
        let x = document.getElementById("descriptionBox");
        x.style.visibility = "hidden";
    });
    function fillText(e){
        let span = document.getElementById("descriptionText");
        let text = "";
        switch(e.target.id){
            case "Link_kid":
                text = "Link niño: \n\r"+
                "Link deberá enfrentar un mal siniestro, para ello hará uso de la Espada Maestra."+
                " Desafortunadamente Link es muy joven para usarla, por lo que permanecerá sellado"+
                " en el Reino Sagrado durante siete años hasta despertar en un futuro distante como "+
                "un adulto para poder hacer uso de la Espada Maestra.";
                break;
            case "Zelda_kid":
                text = "Zelda niña: \n\r"+
                "Zelda es la princesa del reino de Hyrule. A su corta edad ella es muy inteligente "+
                "y nota cosas que los demás no. Gracias a su inteligencia descubre las siniestras "+
                "intensiones de Ganondorf mucho antes de que el mismo traicionara a su padre y la "+
                "intentara asesinar. Ella logra escapar y jura regresar por venganza algún día.";
                break;
            case "Link_adult":
                text = "Link adulto: \n\r"+
                "Link, tras sacar la Espada Maestra, es transportado a la Cámara de los Sabios, donde"+
                " permanece dormido durante siete años, pues era demasiado joven para ser el héroe "+
                "legendario del Tiempo, el único digno de empuñar la Espada Maestra. Al despertar debe "+
                "vencer a Ganondorf, y la única manera de acabar con el Rey de las Tinieblas es "+
                "despertar a los cinco Sabios sellados en las cinco mazmorras de Hyrule.";
                break;
            case "Zelda_adult":
                text = "Zelda adulta: \n\r"+
                "Cuando Link despierta en el Reino Sagrado después de su viaje en el tiempo siete años"+
                " después, se encuentra con Zelda disfrazada de un muchacho llamado Sheik, quien dice "+
                "ser uno de los sobrevivientes de la tribu Sheikah. Después de eso, Zelda le da pistas "+
                "a Link de las ubicaciones de varios templos, y le enseña canciones especiales que le "+
                "servirán para teletransportarse a puntos específicos cercanos a tales templos.";
                break;
            case "Ganondorf":
                text = "Ganondorf: \n\r"+
                "También conocido como el Rey Demonio o Señor de la Oscuridad. Es un miembro de las "+
                "Gerudo, como el miembro masculino que solo nace cada cien años, Ganondorf logra "+
                "convertirse en el rey de las Gerudo. Dotado de una poderosa magia, Ganondorf busca "+
                "la Trifuerza para concederle su deseo de conquistar el mundo entero.";
                break;
            case "Deku":
                text = "Templos: \n\r"+
                "Las aventuras de Link lo llevarán a recorrer diversos templos ubicados de distintas "+
                "zonas de Hyrule, con el fin de ganar la fuerza necesaria para hacer frente a Ganondorf"+
                ", despertando durante su viaje a los 5 sabios que le ayudarán a sellar definitivamente"+
                " al mal que acecha al mundo...";
                break;
            case "Fight":
                text = "Batalla Final: \n\r"+
                "Al final de su viaje, Link deberá hacer frente a su más temible enemigo, el Señor de "+
                "la Oscuridad. Han pasado 7 años y Link tiene ahora la fuerza suficiente para vencerlo, "+
                "¿Será acaso una batalla predestinada? Con ayuda de Zelda y los sabios, deberá terminar "+
                "de una vez por todas con Ganondorf.";
                break;
        }
        span.innerText = text;
    }
});