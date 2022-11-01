import React, {useState} from "react";

/*Actividad:
1-Hacer un componente que renderice un título y un párrafo (Lorem ipsum)
2-Al hacer click en el título se tiene que poder actualizar el posicionamiento del mismo (izquierda,centrado,derecha). 
3- Cuando el usuario toque una tecla específica el color y la fuente del párrafo tienen que actualizarse.*/

const Eventos = () => {

    const [clasePosicion, setClasePosicion] = useState("titulo-Izquierda");
    const [titulo, setTitulo] = useState('');
    const [parrafo, setParrafo] = useState('Lorem Ipsum dolor sit. ');
    const [colorTexto, setColorTexto] = useState('');

    const CambiarPosicionTitulo = () => {
        switch (clasePosicion) {
        case "titulo-Izquierda":
            setClasePosicion("titulo-Centrado");
            break;
        case "titulo-Centrado":
            setClasePosicion("titulo-Derecha");
            break;
        case "titulo-Derecha":
            setClasePosicion("titulo-Izquierda");
            break;
        default:
            setClasePosicion("titulo-Izquierda");
        }
    };

    /*const handleSubmit = (event) => {
        event.preventDefault();
        alert(texto);
    }*/
    const cambiarColor = () =>{
        switch (colorTexto) {
            case "texto-color":
                setColorTexto("texto-color2");
                break;
            case "texto-color2":
                setColorTexto("texto-color");
                break;
            default:
                setColorTexto("texto-color");
            }
    }

    const detectKeydown2 = (e) => {
        if(e.key === " "){
            cambiarColor()
        }
    }

    return (
        <>
        <div className="form-container"  onKeyDown={(e) => detectKeydown2(e)}>
            <div>
                <h1 className={clasePosicion} onClick={() => {CambiarPosicionTitulo();}}>Esto es una prueba</h1>
            </div>

            <div className="wrapper">
                <label htmlFor="titulo">
                    Titulo:  
                </label>
                <input 
                required type="text" 
                name="titulo" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)} />
                <h2>{titulo}</h2>
            </div>
            <div>
                <label htmlFor="texto">
                    Parrafo: 
                </label>
                <input 
                required type="text" 
                name="texto" 
                value={parrafo} 
                onChange={(e) => setParrafo(e.target.value)} />  
                <p className={colorTexto}>{parrafo}</p> 
                <h4>Presiona la tecla espacio dentro del input para cambiar de color el parrafo</h4>         
            </div>
            
        </div>
       
    </>
    );
};

export default Eventos;

/*<form>
<div className="wrapper">
    <label htmlFor="pais">
        PaÃ­s: 
    </label>
    <input 
        required type="text" 
        name="pais" 
        value={pais} 
        onChange={(e) => setPais(e.target.value)} />
</div>
<div className="wrapper">
    <label htmlFor="nombre-apellido">
        Nombre y Apellido: 
    </label>
    <input 
        required type="text" 
        name="nombre-apellido" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} />            
</div>
</form>
<h2>{pais}</h2>
<h2>{nombre}</h2>
<form className="wrapper" onSubmit={handleSubmit}>
<input name="texto" value={texto} onChange={(e) => setTexto(e.target.value)}/>
<input type="submit" value="Submit"/>
</form>*/