import React, { useState } from "react";
import Tabuada from './Tabuada.jsx'
import './Entrada.css'

export default function Entrada(props) {

    const [valor, setValor] = useState(undefined)

    return (
        <>

            <div className="entradaCampo">
                <label>Informe um número: </label>
                <input type="number" onChange={(e) => {setValor(e.target.value)}}/>
            </div>
            {/* <button type="submit" onClick={(e) => { setValor(e.target.value) }}>Calcular</button> */}

            <div className="divider"></div>
            <Tabuada valor={valor} />
        </>
    )
}