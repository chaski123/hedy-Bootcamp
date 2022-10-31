import React from "react";
import User from "../Img/Userimg.jpg"
import '../Components/ProfilePage.css'
import {GrInstagram, GrGithub, GrTwitter, GrMail} from 'react-icons/gr'
import {FaMobile} from 'react-icons/fa'
import {MdCake} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'

const ProfileData= ()=>{
    return  (
        <>
           <div className="Container-profile"> 
                <div className="card"> 
                    <div className=" image"> 
                        <img src={User} height="300" width="300" alt="user-img"/> 
                        <span className="name">Juan Jesus Perez Castillo</span>
                        <div> 
                            <span className="number">+100 <span className="Compras"><strong>Compras relizadas</strong></span></span> 
                        </div>   
                        <span className="join">Joined Oct, 2022</span> 
                    </div> 
                </div>  
                <div className="card-info"> 
                    <div className="Info-details">
                        <h2><strong>Datos del Usuario</strong></h2>
                        <p ><GrMail className="icon"/><strong>Correo: </strong>juanjesusperezcast@yahoo.com</p>
                        <p ><MdCake className="icon"/><strong>Fecha de Nacimiento: </strong>10/11/1998</p>
                        <p ><ImLocation className="icon"/><strong>Pais: </strong>Argentina</p>
                        <p ><FaMobile className="icon"/><strong>Celular: </strong>3796-211241</p>
                    </div>
                    <hr/>
                    <h2><strong>Redes Sociales</strong></h2>
                    <div className="Info-redes">
                        <span>Instagram <a href="https://www.instagram.com/" target="_blanket"><GrInstagram className="icon instagram"/></a></span>
                        <span> Twitter <a href="https://twitter.com/?lang=es" target="_blanket"><GrTwitter className="icon twitter" /></a></span>
                        <span> Github <a href="https://github.com/" target="_blanket"><GrGithub className="icon github"/></a></span>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default ProfileData;