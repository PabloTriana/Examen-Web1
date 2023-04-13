import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Swal from 'sweetalert2'


class App extends Component {
  state = {
    rentas: [],
    total: 0,
    peliculasLista: [
      { codigo: 1, nombre: "Halloween Kills", idioma: 'SUB', precio: 18.50, stock: 20 },
      { codigo: 2, nombre: "M3gan", idioma: 'ESP', precio: 28.50, stock: 10 },
      { codigo: 3, nombre: "Babylon", idioma: 'ESP', precio: 35.00, stock: 5 },
      { codigo: 4, nombre: "La ballena", idioma: 'ESP', precio: 38.50, stock: 8 },
      { codigo: 5, nombre: "Llaman a la puerta", idioma: 'SUB', precio: 18.50, stock: 23 },
      { codigo: 6, nombre: "Ant-Man y la Avispa: Quantumania", idioma: 'ESP', precio: 18.50, stock: 10 },
      { codigo: 7, nombre: "Creed III", idioma: 'ESP', precio: 35.00, stock: 9 },
      { codigo: 8, nombre: "Scream 6", idioma: 'ESP', precio: 38.50, stock: 3 },
    ],
    desactivado: false,
  }

  guardar = (e) => {
    let temporal = this.state.rentas.find((d, i) => d.clave !== e.clave)
    this.setState({
      rentas: [...this.state.rentas, e],
      total: this.state.total + 1
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula agregada',
      showConfirmButton: false,
      timer: 1500
    })

  }

  eliminar = (r) => {
    let temporal = this.state.rentas.filter((d) => d.codigo !== r.codigo)
    this.setState({
      rentas: temporal,
      total: this.state.total - 1

    })
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Materia eliminada',
      showConfirmButton: false,
      timer: 1500
    })
  }

  verificar = (r) => {
    let temporal = this.state.rentas.find((p, i) => r.codigo === p.codigo)
    return temporal
  }


  render() {

    return (
      <div className="App">
        <Header />
        <Body

          peliculasLista={this.state.peliculasLista}
          guardar={this.guardar}
          rentas={this.state.rentas}
          verificar={this.verificar}
          eliminar={this.eliminar}
          total={this.state.total}

        />
        <Footer titulo="Copyright © Todos los derechos reservados " />
      </div>
    );
  }
}

export default App;

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


<Button variant="warning">Warning</Button>{' '}
<Button variant="danger">Danger</Button>{' '}
<Button variant="primary">Primary</Button>{' '}

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
</Table>


MyComponent.propTypes = {
  name: PropTypes.string
};


*/