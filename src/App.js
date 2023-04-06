import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

function Calculo(){

const[calculo, setCalculo] =useState(0);

const aumentarContador = () => {

  setCalculo(calculo + 1);
}

const disminuirContador = () => {

  setCalculo(calculo - 1);
};


return(

<div>
<h1>Presione: {calculo}</h1>
<button onClick={aumentarContador}>SUMAR</button>
<button onClick={disminuirContador}>RESTAR</button>
</div>

);

}
export default Calculo;