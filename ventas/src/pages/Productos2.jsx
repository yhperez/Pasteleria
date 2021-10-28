import Header from "../components/header";

function Productos2 (){
    return(
        <div>
        <Header/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <h1><b>Agregar producto</b></h1>
    <form class="f2">
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Codigo</b></label>
            <input type="text" class="form-control" id="full_name_id" placeholder="Ingresa tu nombre"/>
        </div>  
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Producto</b></label>
            <input type="text" class="form-control" id="full_tele_id" placeholder="Ingresa numero telefonico"/>
        </div>  
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Descripcion</b></label>
            <input type="text" class="form-control" id="full_email_id" placeholder="Ingresa un producto"/>
        </div>
        <div class="d4"> 
          <a class="a2"href="/Productos">Enviar</a>
        </div> 

    </form>
       </div>);
}
export default Productos2;