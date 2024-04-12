import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'

function WelCome(){
    return(
        <div>
            <h1>Seja Bem Vindo</h1>
            <a href="Formularios.js"><button>Formulários</button></a>
        </div>
    )
}
export default WelCome