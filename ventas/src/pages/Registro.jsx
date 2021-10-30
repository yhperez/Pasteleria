import React from 'react'

const Registro = () => {
    return (
<div>
    <div className="Login2">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/> 
    <div>
        <h1><b>Registro</b></h1>
    </div>
    <form>
    <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Nombre</b></label>
            <input type="text" class="form-control" required/>
        </div> 
           
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Apellido</b></label>
            <input type="text" class="form-control" required/>
            </div> 
            <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Telefono</b></label>
            <input type="tel" class="form-control" required/>

        </div> 
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
            <input type="email" class="form-control" id="full_email_id" placeholder="Ejemplo: correo@mail.com" required/>
        </div> 
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Contraseña</b></label>
            <input type="password" class="form-control" required/>
        </div>  
        <div class="d2">
        <a href="/Login">
        <button id="b4" type="button" class="btn btn-lg btn-primary"><b>Registrar</b></button>
        </a>
        </div>  
    </form>
    </div> 
</div> );
}

export default Registro;
