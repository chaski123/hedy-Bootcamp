import fondo from './astronauta.png'
import { ComponentFuncional } from './ComponenteFuncional'

export const Home = () => {
    return(
        
            
            <div className='Div-Presentacion'>
            <h1>Home Page</h1>
                <ComponentFuncional nombre="Juan Jesus" apellido="Perez Castillo" trabajo="En el navbar encontraras algunas de las actividades que hice durante mi Bootcamp en Hedy."/>
                <img width='600px' height='600px' style={{margin: '60px', opacity: '0.9'}} src={fondo} alt='Astronauta'></img>
            </div>
            
        
    )
}