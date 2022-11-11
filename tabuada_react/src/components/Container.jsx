import React, { useState } from "react";
import Entrada from './Entrada.jsx'
import './Container.css'

export default function Container() {

    return (
        <>
            <div className="container">
                <h3>TABUADA</h3>
                <Entrada></Entrada>
            </div>
        </>
    )
}