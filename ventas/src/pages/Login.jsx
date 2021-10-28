
function Login(){
  return(
    <div className="Login">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/> 
    <div>
        <h1><b>Bienvenido</b></h1>
    </div>
    <form>
    <div class="form-group"> 
            <label for="state_id" class="control-label"><b>Identificate</b></label>
            <select class="form-control" id="state_id">
                 <option>          </option>
                <option value="AL">Administrador</option>
                <option value="AL">Vendedor</option>
            </select>                    
        </div>
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Correo</b></label>
            <input type="email" class="form-control" id="full_email_id" placeholder="Ejemplo: correo@mail.com"/>
        </div> 

        <div class="d2"> 
             <a class="a1"href="/Productos"><b>Ingresar</b></a> 
        </div> 
    </form>
</div> );
}
export default Login;

