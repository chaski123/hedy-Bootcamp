import './App.css';
import Users from './Async';
import Contador from './Contador';
import {Button} from './Button';
import {useState} from 'react'
import Fetch from './Fetch';
import Axios from './axios';

/*Actividad:
1. Usando React Router, crear una página de error y hacer que la app renderice dicho componente cuando recibe un path desconocido.
2. (Opcional) Crear un componente que renderice una variable de acuerdo a una url dinámica*/
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { ListaClases, Clase } from './ListaClases';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';

function App() {
  /*const[showGato, setShowGato] = useState(false);
  const[showPerro, setShowPerro] = useState(false);*/

  return (
    <div>
      <div className="App-header">
       <BrowserRouter>
            <div className="Nav-class">
              <Link to='/'><Button value="Home"/></Link>
              <Link to='/axios' ><Button value="Axios"/></Link>
              <Link to='/fetch'><Button value="Fetch"/></Link>
              <Link to={`/clase`}><Button value="Lista de Clases"/></Link>
              <Link to={`/async`}><Button value="Asincronismo"/></Link>
              <Link to={`/contador`}><Button value="Contador"/></Link>
            </div>
            <div className='Nav-routes'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/axios" element={<Axios/>} />
                <Route path="/fetch" element={<Fetch/>} />
                <Route path="/clase" element={<ListaClases/>} />
                <Route path="/clase/:id" element={<Clase/>} />
                <Route path="/async" element={<Users/>} />
                <Route path="/contador" element={<Contador/>} />
                <Route path='*' element={<ErrorPage/>} />
              </Routes>
            </div>
          </BrowserRouter>
      </div>
    </div>
  );
}


/*<Fetch/>
<Auto/>
      <Lista/>
      <WelcomeUser/>
      <ComponentFuncional nombre="Juan Jesus" apellido="Perez Castillo" user="Juancho121" Id = {Math.floor(Math.random() * 3)}/>
        <h1>Mis mascotas</h1>
        <Button value={"Mostrar Gato"} onClick={()=> setShowGato(!showGato)}></Button>
        {showGato ? <div><img src={gato} className="App-gato" alt="gato"></img><p>
          Mi gato dice miau!!! y esta feliz.
        </p></div> : 'No hay gato'}
        
        <Button value={"Mostrar Perro"} onClick={()=> setShowPerro(!showPerro)}></Button>
        {showPerro ? <div><img src={perro} width="500px" height="500px" className="App-perro" alt="perro"></img><p>
          El perro malo aparecio :(.
        </p></div> : 'El perro malo se fue :)'}
        <Users/>
        <Contador/>*/

export default App;
