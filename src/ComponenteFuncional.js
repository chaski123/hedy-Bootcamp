import React from "react";

export function ComponentFuncional(props){
    return(
        <>
            <div className="ComponentFuncional">
                <p>{`Mi Nombre es ${props.nombre} ${props.apellido}`}</p>
                <p>{`${props.trabajo}`}</p>
            </div>
        </>
    )

}