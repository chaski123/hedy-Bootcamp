/*Actividad:
Al hacer un submit, renderizar el nombre y una imagen de un personaje 
en base al input del usuario.

Opcional: Darle estilo a la vista con CSS.
Opcional2: Agregar más inputs.*/
import { useState } from "react";
import "./Form.css";

const Forms = () => {
    const [nombre, setNombre] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [inputs, setInputs] = useState('');
    const imagenes = ["https://thronesapi.com/assets/images/daenerys.jpg", 
    "https://thronesapi.com/assets/images/jon-snow.jpg", 
    "https://thronesapi.com/assets/images/cersei.jpg",
    "https://thronesapi.com/assets/images/robb-stark.jpg"]


      const handleNameChange = (e) =>{
        e.preventDefault();
        setNombre(e.target.value)
      } 
      const handleTitleChange = (e) =>{
        e.preventDefault();
        setTitle(e.target.value)
      } 
      const handleImageChange = (e) =>{
        e.preventDefault();
        setImage(e.target.value)
      } 

      const handleSubmit= (e)=>{
        e.preventDefault();
        setInputs({nombre: nombre, titulo: title, imagen: image});
      }

    return(
        <>
            <form className="form2" onSubmit={(e) => handleSubmit(e)}>
                <h2>Personajes de Game Of Throne</h2>
                <label htmlFor="nombre">Nombre del Personaje: </label>
                <input type='text'
                name="nombre"
                value={nombre}
                onChange={(e)=>handleNameChange(e)}
                >
                </input>
                <label htmlFor="image"></label>
                <select value={image} onChange={(e)=>handleImageChange(e)}>
                    <option value='image'>Selecciona una Imagen: </option>
                    <option value='Daenerys'>Daenerys</option>
                    <option value='Jon'>Jon</option>
                    <option value='Cersei'>Cersei</option>
                    <option value='Rob'>Rob</option>
                </select>
                <input value='Mother of Dragons' type='checkbox' onChange={(e)=>handleTitleChange(e)}></input><span>Mother of Dragons</span>
                <input value='King of the North' type='checkbox' onChange={(e)=>handleTitleChange(e)}></input><span>King of the North</span>
                <input value='Lady of Casterly Rock' type='checkbox' onChange={(e)=>handleTitleChange(e)}></input><span>Lady of Casterly Rock</span>
                <input value='Lord of Winterfell' type='checkbox' onChange={(e)=>handleTitleChange(e)}></input><span>Lord of Winterfell</span>
                <button type="submit">Enviar</button>
            </form>
            <h2>Personaje: {inputs?.nombre}</h2>
            <h3>Titulo: {inputs?.titulo}</h3>
            <img width='400px' height='400px' alt="Personajes-img" 
            src={(inputs?.imagen === 'Daenerys')?imagenes[0]:(inputs?.imagen === 'Jon')?imagenes[1]:(inputs?.imagen === 'Cersei')?imagenes[2]:imagenes[3]}/>
        </>
    )

};

export default Forms;
// export const Forms = () => {

//     const [ input, setInputs ] = useState();

//     const handleChange = (e) => {
//         e.preventDefault();
//         const name = e.target.name;
//         const value = e.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(input);
//     };

//     return(
//         <div>
//             <form className="form-container" onSubmit={handleSubmit}>
//                 <h1>Mi formulario</h1>
//                 <label 
//                     htmlFor="nombre">
//                         Nombre:
//                 </label>
//                 <input
//                     type="text" 
//                     name="nombre" 
//                     value={input?.nombre}
//                     onChange={handleChange}
//                 />
//                 <label 
//                     htmlFor="edad">
//                         Edad:
//                 </label>
//                 <input
//                     type="number" 
//                     name="edad" 
//                     value={input?.edad}
//                     onChange={handleChange}
//                 />
//                 <button 
//                     type="submit">
//                         Enviar
//                 </button>
//             </form>
//             <p>
//                 Mi nombre es {input?.nombre} y tengo {input?.edad} años.
//             </p>
//         </div>
//     )

// };

/*const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value]; // updatedList.push(event.target.value)
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        };*/

        /* <ul className='userlist'>
        <h2> Personaje de Game of Throne </h2>
            {!personajes ? 'Cargando...' :
                personajes.map((personas, i) =>{
                    return i < 5 ?(
                        <div className="Cryptos-Container" key={i}>
                            <br/>
                            <h4>Nombre: {personas.firstName} {personas.lastName}</h4>
                            <img src={personas.imageUrl} alt="Personas-img"></img>
                            <li>Casa: {personas.family}</li>
                            <li>Titulo: {personas.title}</li>
                        </div>
                    ): null
                })
            }
        </ul> */
