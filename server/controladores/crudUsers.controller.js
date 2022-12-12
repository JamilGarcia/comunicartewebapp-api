const pool = require("../db");


exports.crearNuevoEmpleado = async(req,res) => {
    try {
        const  nuevoEmpleado = req.body;//Aqui se reciben los datos
        //Crear query para insertar datos en la base
        console.log(nuevoEmpleado);
        const result = await pool.query("INSERT INTO main_users (primer_nombre, segundo_nombre, apellidos, correo, fecha_de_nacimiento, " +
        "fecha_de_inicio, puesto_empresa, password_usuario, estado) VALUES (" + 
        "$1, $2, $3, $4, $5, $6, $7, crypt($8,gen_salt('md5')), $9 );",
        [
            nuevoEmpleado.primer_nombre, nuevoEmpleado.segundo_nombre,nuevoEmpleado.apellidos,
            nuevoEmpleado.correo,nuevoEmpleado.fecha_de_nacimiento,nuevoEmpleado.fecha_de_inicio,
            nuevoEmpleado.puesto_empresa,nuevoEmpleado.password_usuario, nuevoEmpleado.estado
        ]);
         console.log(result);
        res.send({status: "success"});
      
    } catch (error) {
        res.send({status: "error"});
        console.log(error);
    }
}

exports.modificarEmpleado = async(req,res) => {
    try {
        res.send("updating empleado");
    } catch (error) {
        
    }
}

exports.eliminarEmpleado = async(req,res) => {
    try {
        res.send("eliminando empleado");
    } catch (error) {
        
    }
}

exports.obtenerEmpleado = async(req,res) => {
    try {
        res.send("obteniendo empleado");
    } catch (error) {
        
    }
}