const conexion = require('../database/db')




exports.mostrarfavoritos = async (req, res)=>{    
  try {
      
      const rut = req.params.rut
      console.log(rut);
      conexion.query('select per.rut, per.nombre, per.snombre, per.ap_pat, per.ap_mat, per.correo, per.telefono, per.imagen from tbl_favorito as fav, tbl_docente as doc, tbl_persona as per, tbl_alumno as al where fav.rut_d = doc.rut_d and doc.rut_d = per.rut and al.rut_a = fav.rut_a and fav.rut_a = ?',[rut],(error, results)=>{
        if(error){
          res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")
        }
console.log ("rut del usuario conectado = "+rut)
console.log(results)
    res.render('mostrarfavorito',{rut:req.rut,results:results})


    })
  } catch (error) {
      console.log(error)
  }       
}



exports.mostrartodo = async (req, res)=>{    
  try {
      
      
      conexion.query('SELECT rut,nombre,snombre,ap_pat,ap_mat,imagen from tbl_persona ',(error, results)=>{
        if(error){   res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")}

    res.render('chat',{rut:req.rut,results:results})


    })
  } catch (error) {
      console.log(error)
  }       
}




exports.insertarmensajeoffline = async (req, res)=>{    
  try {
      
    const emisor = req.body.rut;
    const receptor = req.body.receptor;
    const mensaje = req.body.mensaje

      
      conexion.query('INSERT INTO tbl_chat SET ? ',{emisor:emisor,receptor:receptor,mensaje:mensaje},(error, results)=>{
        if(error){
          res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")
        }


        res.send(" <script> alert('MENSAJE ENVIADO'); window.location.href = '/mostrarfavorito/"+emisor+"' </script> ")


    })
  } catch (error) {
      console.log(error)
  }       
}

exports.bandejaentrada = async (req, res)=>{   
  try {
      
const rut =req.params.rut
console.log(rut);
conexion.query("SELECT per.nombre, per.snombre, per.ap_pat, per.ap_mat, chat.mensaje, chat.fecha, chat.hora FROM tbl_chat AS chat, tbl_persona AS per WHERE chat.emisor = ? AND chat.receptor = per.rut;", [rut, rut], (error, results) => {
  if (error) {
      console.error('Error en la consulta:', error);
      res.send("<script> alert('¡Error!.'); window.location.href = '/' </script>");
  } else {
      // Itera sobre los resultados si son varios registros
      results.forEach(result => {
          result.fechaFormateada = result.fecha.toISOString().split('T')[0]; // Formatear la fecha
      });

      console.log(results);
      res.render('bandejadeentrada', { rut: req.rut, results: results });
  }
})
  } catch (error) {
    console.log(error)
    res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")
  }       
}


exports.insertamensajebandeja = async (req, res)=>{    
  try {
      

    const receptor= req.body.receptor;
    const emisor = req.body.emisor;
    const mensaje = req.body.mensaje;
  // Capturar la fecha y hora actuales
  const fechaRegistro = new Date();
  const fecha = fechaRegistro.toISOString().split('T')[0];  // Obtener solo la fecha en formato 'YYYY-MM-DD'
  // Obtener solo la fecha en formato 'YYYY-MM-DD'
  const hora = fechaRegistro.toTimeString().split(' ')[0]; 


 conexion.query('INSERT INTO tbl_chat SET ? ',{emisor:emisor,receptor:receptor,mensaje:mensaje, fecha:fecha, hora:hora},(error, results)=>{
  if(error){
    res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")
  }
  res.send(" <script> alert('MENSAJE ENVIADO CON EXITO'); window.location.href = '/bandejadeentrada/"+emisor+"' </script> ")
})

  } catch (error) {
    console.log(error)
    res.send(" <script> alert('¡error!.'); window.location.href = '/' </script> ")
  }       
}





