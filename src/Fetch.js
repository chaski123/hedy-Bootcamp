/*1- Crear una API que tenga al menos 2 objetos y que cada uno de ellos tenga al menos 2 propiedades (pueden hacer más o sumarle más propiedades si quieren).
2- Crear un método GET que muestre la información de esos objetos y sus propiedades.
3- Crear un método POST que cree nuevas instancias de cada objeto.
4- Crear un método DELETE que elimine alguna instancia del objeto (preferiblemente que indique cuál ha borrado)
*/ 
import React, { useState } from 'react';
const Fetch = () => {
    const [id, setId] = useState('');
    const [petid, setPetId] = useState('');
    const [postId, setPostId] = useState(0);
    const [postPetId, setPostPetId] = useState(0);
    const [username, setUsername] = useState('');
    const [name, setPetsname] = useState('');
    const [especie, setEspecie] = useState('');
    const [avatar, setAvatar] = useState('');
    const [deletedUsername, setDeletedUsername] = useState('');
    const [deletedPetsname, setDeletedPetsname] = useState('');
    const [getId, setGetId] = useState('');
    const [getPetId, setGetPetId] = useState('');
    const [getUserNameData, setGetUsernameData] = useState('');
    const [getPetsName, setGetPetsName] = useState('');

    const apiUrl = 'https://6333737f573c03ab0b5dd6a7.mockapi.io/users/';
    const apiUrlpets = 'https://6333737f573c03ab0b5dd6a7.mockapi.io/Mascotas/';
    /*Traer datos del usuario y su mascota */
    const GetData = async () => {
        try {
            const response = await fetch(apiUrl + id);
            if (!response.ok) throw new Error("Not found 🙁");
            const data = await response.json();
            setGetId(data.id);
            setGetUsernameData(data.username);
        }
        catch(err) {
            console.error(err);
        }
    }

    const GetPetsData = async () => {
        try {
            const response = await fetch(apiUrlpets + petid);
            if (!response.ok) throw new Error("Not found 🙁");
            const data = await response.json();
            setGetPetId(data.id);
            setGetPetsName(data.name);
            setEspecie(data.especie);
            setAvatar(data.avatar)
        }
        catch(err) {
            console.error(err);
        }
    }

    /*Actualizar usuario y mascota */
    const PostData = async() => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username})
            };
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            setPostId(data.id);
            setUsername(data.username);
        }
        catch(err){
            console.log(err)
        }
    }

    const PostPetData = async() => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name})
            };
            const response = await fetch(apiUrlpets, requestOptions);
            const data = await response.json();
            setPostPetId(data.petid);
            setPetsname(data.Petsname);
            setEspecie(data.especie)
        }
        catch(err){
            console.log(err)
        }
    }

    /*Eliminar usuario y mascota */
    const DeleteData = async() => {
        try{
            const response = await fetch(apiUrl + id, { method: 'DELETE' });
            const data = await response.json();
            setDeletedUsername(data.username);
        }
        catch(err){
            console.log(err)
        }
    }

    const DeletedPetsName = async() =>{
        try{
            const response = await fetch(apiUrlpets + petid, { method: 'DELETE' });
            const data = await response.json();
            setDeletedPetsname(data.name);
        }
        catch(err){
            console.log(err);
        }
    }
    
    function handleChange(event) {
        setId(event.target.value);
    }
    function handleChange2(event2) {
        setPetId(event2.target.value);
    }

    function handleTextChange(event) {
        setUsername(event.target.value);
    }
    function handleTextChange2(event2) {
        setPetsname(event2.target.value);
    }
    function handleTextChange3(event3) {
        setEspecie(event3.target.value);
    }

    return(
        <div className='fetch-container'>
            <h1>Fetch test</h1>
            <div className='mini-container'>
                <h4>Datos Usuario</h4>
                <span><label htmlFor='user'>Enter UserName: </label></span>
                <input value={username} name='user' onChange={handleTextChange} />
                <div className='pets-container'>
                    <h4>Datos Mascota</h4>
                    <span><label htmlFor='pet'>Enter PetName: </label></span>
                    <input value={name} name='pet' onChange={handleTextChange2} />
                    <br/>
                    <span><label htmlFor='pet'>Enter PetEspecie: </label></span>
                    <input value={especie} name='pet' onChange={handleTextChange3} />
                </div>
            </div>
            <div className='mini-container'>
                <h4>Post Usuario</h4>
                <p>POST UserId: {postId}</p>
                <p>POST Username: {username}</p>
                <button className='Button' onClick={() => PostData()}> Post</button>
                <div className='pets-container'>
                    <h4>Post Mascota</h4>
                    <p>POST PetId: {postPetId}</p>
                    <p>POST petsname: {name}</p>
                    <p>POST Especie: {especie}</p>
                    <button className='Button' onClick={() => PostPetData()}> Post</button>
                </div>
            </div>
            <div className='mini-container'>
                <h4>Get Datos Usuario y Mascota</h4>
                <span><label htmlFor='id'>Enter UserId: </label></span>
                <input value={id} name='id' onChange={handleChange} />
                <div className='pets-container'>
                    <span><label htmlFor='petid'>Enter PetId: </label></span>
                    <input value={petid} name='petid' onChange={handleChange2} />
                </div>
            </div>
            <div className='mini-container'>
                <p>GET Userid: {getId}</p>
                <p>GET Username: {getUserNameData}</p>
                <button className='Button' onClick={() => GetData()}> Get</button>
                    <div className='pets-container'>
                        <p>GET PetId: {getPetId}</p>
                        <p>GET Petsname: {getPetsName}</p>
                        <p>GET Especie: {especie}</p>
                        <img width='200px' height='200px' src={avatar} alt="Mascotas-img"></img>
                        <br/>
                        <button className='Button' onClick={() => GetPetsData()}> Get</button>
                        <div>
                    </div >
                </div>
            </div>
            <div className='mini-container'>
                <h4>Eliminar Datos Usuario y Mascota</h4>
                <p>Username: {deletedUsername}</p>
                <button className='Button' onClick={() => DeleteData()}> Delete</button>
                <div className='pets-container'>
                <p>Petsname: {deletedPetsname}</p>
                <button className='Button'  onClick={() => DeletedPetsName()}> Delete</button>
                </div>
            </div>
        </div>
        );
    }
export default Fetch;