import React, {useState} from "react";

const Contador = () =>{
    const[counter, setCounter] = useState(0);
    return (
        <div>
            <div className="Contador-container">
                <p>Valor Actual: {counter}</p>
            </div>
            <span><button className="Button-Contador" onClick={() => setCounter(counter + 1)}>click Me!</button></span>
            <span><button className="Button-Contador" onClick={() => setCounter(0)}>Reset</button></span>
        </div>
    )
}
export default Contador;