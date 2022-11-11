import React from "react";

export default function Taboada(props) {

    const mostrarValores = (v) => {

        if(v != undefined) {
            let valores = []
            for(let i = 0; i <= 10; i++) {
                valores.push(<p>{`${v} X ${i} = ${i*v}`}</p>)
            }
            return valores
        }

        return 'Nenhum Número Informado'
    }

    return (
        <>
            <div>{mostrarValores(props.valor)}</div>
        </>
    )
}