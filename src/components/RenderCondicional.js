import React from 'react';

const RenderCondicional = (props) => {
    return(
        <di>
            {props.nombre!==undefined ?(
                <h1>Bienvenido(a) {props.nombre}!</h1>):
                (<h1>No sabemos quien eres!</h1>)
            }
            
        </di>

    )

    }

export default RenderCondicional;
  