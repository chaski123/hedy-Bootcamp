import React from "react";

const user = [
    {
        nombre: "Juan Jesus",
        apellidos: "Perez Castillo",
        nick: "juancho12",
        id: Math.floor(Math.random() * 3)
    }
]

export default class WelcomeUser extends React.Component {
    render() {
        return <div className="Welcome"> 
            <p><b>Bienvenido {user[0].nombre} {user[0].apellidos}</b>
            Tu nombre de usuario es: <i>{user[0].nick}</i>, Tu id es: <i>{user[0].id}</i></p>
        </div>
            
    }
}