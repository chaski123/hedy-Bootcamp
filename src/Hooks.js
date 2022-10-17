/*Actividad: 
1-Crear un componente que renderice la marca de un auto, un contador y un botón.
2-Al hacer click en la marca del auto, el componente se tiene que poder re renderizar
y mostrar otra marca a eleccion del programador.
3-Al hacer click en el boton, al contador se le tiene que sumar un numero aleatorio
entre un valor minimo y maximo a eleccion del programador.

(OPCIONAL:)
 4- renderizar todos los elementos de 
un componente reactivo que sea una lista 
a eleccion del programador (tiene que usar useState).*/

import { useState, useEffect } from "react";



export const Auto = () => {
    const [marcaAuto, setMarcaAuto] = useState('Fiat');
    const [count, setCount] = useState(0);
    /*useEffect(() => {
      console.log('Re mal todo');
    })*/

    return(
        <div>
            <p>El auto es de la marca: {marcaAuto}</p>
            <button onClick={() => {setMarcaAuto('Renault')}}>click Me!</button>

            <p>Contador: {count}</p>
            <button onClick={()=>{setCount(count + Math.random())}}>Magia!</button>
        </div>
    )
}


