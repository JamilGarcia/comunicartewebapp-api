const pool = require("../db");


exports.getDatosUsuario = async(req, res) => {
    //Obtener datos del usuario mediante Rest API
    try {
        const {correo} = req.body;
        const result = await pool.query('SELECT primer_nombre, segundo_nombre, apellidos, correo, fecha_de_nacimiento, fecha_de_inicio, puesto_empresa ' 
                + 'FROM main_users WHERE correo = $1 ;', [correo]);;
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
    }
   
}

exports.ObtenerNombreUsuario = async(req, res) => {
    console.log("Entra");
    try {
        const {correo} = req.body;
        const result = await pool.query('SELECT concat(primer_nombre, \' \',apellidos) as NombreUsuario FROM main_users WHERE correo = $1 ;', [correo]);
        console.log(result.rows[0]);
        return res.json(result.rows[0]);
    } catch (error) {
       console.log(error);
    }
}

const modificarDatosUsuario = async(req,res) => {
    res.send("updating a task");
}
