import React from "react";
import Error from '../Img/error3.gif'
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const ErrorPage = () => {

    const [{user}] = useStateValue();
    return (
        <div className="Gif" >
            <img src={Error} width="50%"  height='600px' style={{display:'flex',margin: '100px auto'}} alt=''></img>
            {!user?
            <Link to="/">
                <button className="button">Volver Al menu</button>
            </Link>: <Link to="/">
                <button className="button">Profile Page</button>
            </Link>
            }   
        </div>
    )
}

export default ErrorPage