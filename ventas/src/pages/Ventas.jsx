import Header from "../components/header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  {id:1,
  fecha: "12/09/21",
  producto: "Brazo de reina",
  cantidad:2,
  preciounit:12000,
  valortotal:24000,
  cliente:"Jose",
  vendedor:"Luisa",
  estado:"Cancelada"},

  {id:2,
    fecha: "30/09/21",
    producto: "Muffin",
    cantidad:4,
    preciounit:3000,
    valortotal:12000,
    cliente:"Luis",
    vendedor:"Camilo",
    estado:"Proceso"},

    {id:3,
        fecha: "31/09/21",
        producto: "Torta de leche",
        cantidad:2,
        preciounit:15000,
        valortotal:30000,
        cliente:"Jonathan",
        vendedor:"Camilo",
        estado:"Proceso"},

        
    {id:4,
        fecha: "1/10/21",
        producto: "Postre flor",
        cantidad:4,
        preciounit:5500,
        valortotal:22000,
        cliente:"Sandra",
        vendedor:"Luisa",
        estado:"Proceso"},

    {id:5,
            fecha: "2/10/21",
            producto: "Torta Kelpie",
            cantidad:1,
            preciounit:38000,
            valortotal:38000,
            cliente:"Maria",
            vendedor:"Luisa",
            estado:"Cancelada"},
     {id:6,
                fecha: "3/10/21",
                producto: "Brazo Azul",
                cantidad:2,
                preciounit:17000,
                valortotal:34000,
                cliente:"Leidy",
                vendedor:"Luisa",
                estado:"Cancelada"},
];

class Productos extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      fecha: "",
      producto: "",
      cantidad:"",
      preciounit:"",
      valortotal:"",
      cliente:"",
      vendedor:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].fecha = dato.fecha;
        arreglo[contador].producto = dato.producto;
        arreglo[contador].cantidad = dato.cantidad;
        arreglo[contador].preciounit = dato.preciounit;
        arreglo[contador].valortotal = dato.valortotal;
        arreglo[contador].cliente = dato.cliente;
        arreglo[contador].vendedor = dato.vendedor;
        arreglo[contador].estado = dato.estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
      <Header />
        <Container>
          <input class="bu1" placeholder="Buscar"/>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nueva venta</Button>
          <br />
          <br />
          <Table class="table table-striped">
            <thead class="t1">
              <tr>
                <th>Id</th>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unidad</th>
                <th>Valor total</th>
                <th>Cliente</th>
                <th>Vendedor</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody class="tb1">
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.fecha}</td>
                  <td>{dato.producto}</td>
                  <td>{dato.cantidad}</td>
                  <td>{dato.preciounit}</td>
                  <td>{dato.valortotal}</td>
                  <td>{dato.cliente}</td>
                  <td>{dato.vendedor}</td>
                  <td>
                    <Button color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}>Actualizar</Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio Unidad: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.preciounit}
              />
 
            </FormGroup>

            <FormGroup>
              <label>
                Valor total: 
              </label>
              <input
                className="form-control"
                name="valor total"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.valortotal}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cliente: 
              </label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cliente}
              />
 
            </FormGroup>

            <FormGroup>
              <label>
                Vendedor: 
              </label>
              <input
                className="form-control"
                name="vendedor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.vendedor}
              />
 
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Venta</h3></div>
          </ModalHeader>

          <ModalBody>

          <FormGroup>
              <label>
               id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio Unidad: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.preciounit}
              />
 
            </FormGroup>

            <FormGroup>
              <label>
                Valor total: 
              </label>
              <input
                className="form-control"
                name="valortotal"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.valortotal}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cliente: 
              </label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cliente}
              />
 
            </FormGroup>

            <FormGroup>
              <label>
                Vendedor: 
              </label>
              <input
                className="form-control"
                name="vendedor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.vendedor}
              />
 
            </FormGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Productos;

