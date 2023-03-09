import React from "react";
import './App.css';

const Display = ()=>{
  return(
    <div>
      <input className="displayCalcu" type="text"></input>
    </div>
  );
}

const Botao = (props)=>{
  return(
    <button className="valor">
      {props.valor}
    </button>
  );
}

const BotaoOperador = (props)=>{
  return(
    <button className="operador">
      {props.operador}
    </button>
  );
}


const Grade = ()=>{
  return(
    <div>
      <table>
        <tr>
          <td colspan="4"><Display/></td>
        </tr>
        <tr>
          <td colspan="3"><Botao valor="AC"/></td>
          <td><BotaoOperador operador="/"/></td>
        </tr>
        <tr>
          <td><Botao valor="7"/></td>
          <td><Botao valor="8"/></td>
          <td><Botao valor="9"/></td>
          <td><BotaoOperador operador="*"/></td>
        </tr>
        <tr>
          <td><Botao valor="4"/></td>
          <td><Botao valor="5"/></td>
          <td><Botao valor="6"/></td>
          <td><BotaoOperador operador="-"/></td>
        </tr>
        <tr>
          <td><Botao valor="1"/></td>
          <td><Botao valor="2"/></td>
          <td><Botao valor="3"/></td>
          <td><BotaoOperador operador="+"/></td>
        </tr>
        <tr>
          <td colspan="2"><Botao valor="0"/></td>
          <td><Botao valor="."/></td>
          <td><BotaoOperador operador="="/></td>
        </tr>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Grade/>
    </div>
  );
}

export default App;
