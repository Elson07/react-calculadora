import React, {Component} from "react";
import './App.css';
import { render } from "@testing-library/react";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      valor: 0,
      operacao: '',
      aux: null,
    }

    this.display = this.display.bind(this);
    this.calcula = this.calcula.bind(this);
  }


  display(){

    
    if(this.state.operacao){
      this.state.aux = this.state.valor
      this.state.valor = 0
      this.state.operacao = ''
      console.log(this.state.aux)
    }

    if(this.state.operacao == '+'){
      this.state.valor = this.state.valor + this.state.aux
      
    }

    /*
    if(this.state.operacao === '+'){
      
      if(this.state.aux === null){
        this.state.aux = this.state.valor
        this.state.valor = 0
        resposta = this.state.aux
      }else{
        this.state.aux = parseInt(this.state.valor) + parseInt(this.state.aux)
        this.state.valor = 0

        resposta = this.state.aux
      }
      
      //this.state.operacao = ''
    }*/
    
    
    //console.log('Valor da soma: ' + parseInt(this.state.aux))

    return(
      <div className="displayCalcu">
        { parseInt(this.state.valor) }
      </div>
    );
    
  }
  

  calcula(){
    
    /*console.log( parseFloat('2.5') / parseFloat('2.3'))
    let valor = this.state.valor
    let vetorValor = valor.split(/[/+-]/);
    let vetorOperador = valor.split(/[0123456789]/);

    for(let i = 0; i < vetorValor.length; i++){
      console.log(vetorValor[i])
    }

    for(let i = 0; i < vetorOperador.length; i++){
      console.log(vetorOperador[i])
    }

    console.log(vetorValor)

    if( parseFloat(this.state.valor[0]) <= 9){
      console.log("Você digitou um valor numérico");
      this.setState({
        resposta: this.state.valor
      })
    }else if(this.state.valor[0] === ""){
      console.log("Você não digitou nenhum valor");
    }else if(this.state.valor[0] === "*" || this.state.valor[0] === "/" || this.state.valor[0] === "+" || this.state.valor[0] === "-"){
      console.log("Você digitou um operador");
    }
    */
  }



 
  calculadora(){
    return(
      <div>
        <table className="container">
          <tbody>
            <tr>
              <td colSpan="4">{this.display()}</td>
            </tr>
            <tr>
              <td colSpan="3"><button className="valor" onClick={(e) => this.setState({valor: 0})}>AC</button></td>
              <td><button className="operador" onClick={(e) => this.setState({valor: this.state.valor + '/'})}>/</button></td>
            </tr>
            <tr>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "7"})}>7</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "8"})}>8</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "9"})}>9</button></td>
              <td><button className="operador" onClick={(e) => this.setState({valor: this.state.valor + '*'})}>*</button></td>
            </tr>
            <tr>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "4"})}>4</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "5"})}>5</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "6"})}>6</button></td>
              <td><button className="operador" onClick={(e) => this.setState({operacao: "-"})}>-</button></td>
            </tr>
            <tr>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "1"})}>1</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "2"})}>2</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "3"})}>3</button></td>
              <td><button className="operador" onClick={(e) => this.setState({operacao : '+' })}>+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "0"})}>0</button></td>
              <td><button className="valor" onClick={(e) => this.setState({valor: this.state.valor + "."})}>.</button></td>
              <td><button className="operador" onClick={this.calcula}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


  render(){
    return(
      <div>
        {this.calculadora()}
      </div>
    )
  }

}

export default App;
