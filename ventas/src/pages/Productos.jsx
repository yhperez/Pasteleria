import Header from "../components/header";

function Productos (){
    return(
<div>
<Header/>
<div className="container mt-2">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  
    <div className="card">
        <div className="card-body">
            <span className="h3">Lista de productos</span>
           <a href="/Productos2"><button className="btn btn-dark float-right">Agregar</button></a> 
            <table className="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>12345</td>
                    <td>Brazo de reina</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>12000</td>
                    <td>10</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>12346</td>
                    <td>Torta luz</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>40000</td>
                    <td>5</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>12347</td>
                    <td>Postre basico</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>3300</td>
                    <td>11</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                </tbody>
              </table>        </div>
    </div>
</div>
</div>
    );
}
export default Productos;