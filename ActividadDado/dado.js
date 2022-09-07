/*
Actividad:
-Crear un script que al presionar un boton 
despliegue en la pantalla la imagen de una cara aleatoria de
un dado de 6 caras.

OPCIONAL:
Renderizar un mensaje que
indique el valor de la cara del 
dado desplegada en el momento.
*/
    function Img(){
        /*Arreglo de objetos donde cada objeto del arreglo representa una cara del dado */
        let caras = [
            {
                src: "img/caraDado1.png",
                width: "160",
                height: "160"
              
            },
            {
                src: "img/caraDado2.png",
                width: "160",
                height: "160"
            },
            {
                src: "img/caraDado3.png",
                width: "160",
                height: "160"
            },
            {
                src: "img/caraDado4.png",
                width: "160",
                height: "160"
            },
            {
                src: "img/caraDado5.png",
                width: "160",
                height: "160"
            },
            {
                src: "img/caraDado6.png",
                width: "160",
                height: "160"
            }
        ]
        let bufferImagenes = [];

        for (const e of caras) {
            let imagen = new Image();
            imagen.src = e.src,
            imagen.width = e.width,
            imagen.height = e.height

            /*Cada img la agregamos al arreglo de bufferImagenes*/
            bufferImagenes.push(imagen)
        }

        let indiceAleatorio = numeroAleatorio(caras.length);
        let caraAleatoria = bufferImagenes[indiceAleatorio];

        if(indiceAleatorio == 0){
            alert("Valor: 1")
            document.body.appendChild(caraAleatoria)
        }else if(indiceAleatorio == 1){
            alert("Valor: 2")
            document.body.appendChild(caraAleatoria)
        }else if(indiceAleatorio == 2){
            alert("Valor: 3")
            document.body.appendChild(caraAleatoria)
        }else if(indiceAleatorio == 3){
            alert("valor: 4")
            document.body.appendChild(caraAleatoria)
        }else if(indiceAleatorio == 4){
            alert("Valor: 5")
            document.body.appendChild(caraAleatoria)
        }
        else{
            alert("Valor: 6")
            document.body.appendChild(caraAleatoria)
        }
    }
    function numeroAleatorio(n){return Math.floor(Math.random() * n);}

    
    