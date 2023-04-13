import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Body = (props) => {
    return (
        <div  className='App-body' style={{display:"flex",flexDirection:"row"}}>
            <div >
                <h3>Peliculas en renta</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Idioma</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.peliculasLista.map((a, index) =>
                                <tr key={index}>
                                    <td>{a.nombre}</td>
                                    <td>{a.idioma}</td>
                                    <td>{a.precio}</td>
                                    <td><Button variant="primary" onClick={()=>props.guardar(a)} disabled={props.verificar(a)}>+</Button>{' '}</td>
                                   
                                </tr>

                            )
                        }
                    </tbody>
                </Table>
            </div>
            <div >
                <h4>{`Rentadas: ${props.total}`}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Idioma</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.rentas.map((a, index) => {
                            return (
                                <tr key={index}>
                                    <td>{a.nombre}</td>
                                    <td>{a.idioma}</td>
                                    <td>{a.precio}</td>
                                    <td><Button onClick={() => props.eliminar(a)} variant="danger" >-</Button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default Body

/*
  <td><Button variant="success" className='btn-primary' onClick={()=>props.guardar(a)} disabled={props.verificar(a)}>+</Button></td>
 */