import React, {useState, useEffect} from "react";
    const userStyles = {
        background: '#D3B99F',
        opacity: '0.9',
        color: '#210203',
        padding: '20px'
    }
    /*let p = new Promise((resolve, reject) => {
     let a = 1 + 2;
     if(a === 3){
        resolve('Exito')
     } else {
        reject ('Error')
     }  
    })

    p.then((message) => {
        console.log(message);
        console.log(p)
    }).catch((message) => {
        console.log(message);
        console.log(p)
    })*/

    function Users() {
        const url = 'https://6333737f573c03ab0b5dd6a7.mockapi.io/users';
        const [user, setUser] = useState();
        const fetchApi = async () => {
            const response = await fetch(url);
            console.log(response.status);
            const responseJSON = await response.json();
            setUser(responseJSON);
            console.log(responseJSON);
        }
        useEffect(() => {
            fetchApi()
        }, []);
        return (
            <div style={userStyles}>
                <h2 style={{margin: '0px'}}>Lista de usuarios</h2>
                <ul>
                    {!user ? 'Cargando' :
                    user.map((Users) => {
                        return (
                            <div style={{margin: '0px', textAlign:'center'}} key={Users.id}>
                                <br/>
                                <h4 style={{margin: '0px'}}>Datos del Usuario</h4>
                                <li style={{list_style: 'none'}}>Nombre: {Users.name}</li>
                                <li>Direccion: {Users.adress}</li> 
                                <li>Email: {Users.email}</li>
                                <hr/> 
                                <img style={{width: '300px', height: '300px'}} src={Users.imagen} alt="Usuarios-img"></img>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }

export default Users;