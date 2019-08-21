import React, { Component } from 'react';
import axios from 'axios';
import  './Deputados.css';

const API = {
    URL : 'https://dadosabertos.camara.leg.br'
}

class Deputados extends Component{

    constructor(){
        super();
        this.state = {
            deputados: []
        }
    }

    componentDidMount(){
        axios.get(API.URL + '/api/v2/deputados/').then((res) => {
            console.log(res);
            this.setState({deputados: res.data.dados});
        })
    }

  render() {
      const { deputados } = this.state;
    return(
      <div className="container">
          <div className="header">
            <h2>Deputados</h2>
          </div>
          <div className="row">
              {deputados.map((name) => (
                  <div className="content">
                       <img className="img" src={name.urlFoto} />
                      <div className="dados">
                      <br/>
                        {'Deputado: ' + name.nome}
                        <br/>
                        {'Parido: ' + name.siglaPartido}
                        <br/>
                        {'Email: ' + name.email}
                      </div>
                  </div>
              ))}
          </div>
      </div>
    );
  }
}

export default Deputados;
