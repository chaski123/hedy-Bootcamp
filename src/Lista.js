import { useState } from "react";

export const Lista = () =>{
    const [list] = useState(['Juan', 'Marcelo', 'Agustin', 'Florencia'])

    return(
        <div>
            {list.map((nombres, index)=>
             <li key={index}>{nombres}</li>
            )}
        </div>
    )
}