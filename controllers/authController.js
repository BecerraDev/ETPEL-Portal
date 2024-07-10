const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')


//promesas se espera que devuelva algo
const {promisify} = require('util')


//procedimiento para registrar Docente
exports.register = async (req, res)=>{    
    try {
        const rut = req.body.rut;
        const nombre = req.body.nombre;
        const snombre = req.body.snombre;
        const ap_pat = req.body.ap_pat;
        const ap_mat = req.body.ap_mat;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const pass = req.body.pass;
        const id_rol = req.body.id_rol;
        const imagen =req.body.imagen;
        let passHash = await bcryptjs.hash(pass, 8)
        

        conexion.query('SELECT rut FROM tbl_persona WHERE rut = ?', [rut], async (error, results)=>{
            if( !results.length == 0 ){
                res.render('login', {
                    alert: true,
                    alertTitle: "¡Error!",
                    alertMessage: "RUT ya se encuentra utilizado",
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'    
                })


            }else{
                conexion.query('INSERT INTO tbl_persona SET ?', {rut:rut,nombre:nombre,snombre:snombre,ap_pat:ap_pat,ap_mat:ap_mat,correo:correo,telefono:telefono, pass:passHash,id_rol:id_rol,imagen:imagen}, (error, results)=>{
                    if(error){console.log(error)}
   
                    res.render('login', {
                        alert: true,
                        alertTitle: "¡Cuenta creada!",
                        alertMessage: "Cuenta creada",
                        alertIcon:'succes',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    })










                    if(id_rol=="1"){
conexion.query('INSERT INTO tbl_docente SET ?',{rut_d:rut})
                    }else{
                        conexion.query('INSERT INTO tbl_alumno SET ?',{rut_a:rut})   
                    }
                 
                })
            }
        })

        
    } catch (error) {
        console.log(error)
    }       
}


exports.login = async (req, res)=>{
    try {
        const rut = req.body.rut
        const pass = req.body.pass        

        if(!rut || !pass ){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else{
            conexion.query('SELECT rut,pass,id_rol FROM tbl_persona WHERE rut = ? ', [rut], async (error, results)=>{
                if( results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass)) ){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "rut y/o Password incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    })
                }else{
                    //inicio de sesión OK
                    const rut = results[0].rut
                    const id_rol = results[0].id_rol
                    const token = jwt.sign({rut:rut,id_rol:id_rol}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    //generamos el token SIN fecha de expiracion
                   //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
                   console.log("TOKEN: "+token+" para el USUARIO : "+rut+id_rol)

                   const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', token, cookiesOptions)
                   res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                   })
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

exports.isAuthenticated = async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM tbl_persona WHERE rut = ?', [decodificada.rut], (error, results)=>{
                if(!results){return next()}
                req.rut = results[0]
                req.id_rol = results[0]
               
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')        
    }
}

exports.logout = (req, res)=>{
    res.clearCookie('jwt')   
    return res.redirect('/')
}



exports.perfildoc = async (req, res)=>{    
    try {
        const rut = req.params.rut 
        conexion.query('SELECT per.rut, per.nombre, per.snombre, per.ap_pat, per.ap_mat, per.correo, per.telefono, doc.descripcion, per.imagen, COALESCE(AVG(val.puntaje_valoracion), 0) as puntaje_valoracion FROM tbl_docente as doc JOIN tbl_persona as per ON per.rut = doc.rut_d LEFT JOIN tbl_valoracion as val ON per.rut = val.rut_d WHERE per.rut = ?',[rut],(error, results)=>{
            if(error){console.log(error)}
            const id = req.params.id;
            if(id=="1"){
                res.render('perfildocente',{rut:req.rut,results:results, alert:false})
            }else{
                res.render('error', {
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "¡CUENTA CON ROL DOCENTE!",
                    alertIcon:'error',
                    showConfirmButton: false,
                    timer: 800,
                    ruta: ''
               })  

            }

        })
    } catch (error) {
        console.log(error)
    }       
}



exports.datosdocente = async (req, res)=>{    
    try {
        const rut = req.params.rut 
        conexion.query('SELECT rut,per.correo,per.telefono,doc.descripcion,per.imagen FROM tbl_docente as doc , tbl_persona as per WHERE per.rut = ? and per.rut = doc.rut_d',[rut],(error, results)=>{
            if(error){console.log(error)}
        res.render('actualizardatosdocente',{rut:req.rut,user:results[0]});
        
        })
    } catch (error) {
        console.log(error)
    }       
}




exports.docenteupdate = (req, res)=>{
    const rut = req.body.rut
    const correo = req.body.correo
    const telefono = req.body.telefono
    const descripcion = req.body.descripcion
    const imagen =req.body.imagen
conexion.query('UPDATE tbl_persona,tbl_docente SET ? WHERE rut = ? and rut_d = ?',[{correo:correo,telefono:telefono,descripcion:descripcion,imagen:imagen},rut,rut], (error, results)=>{
    if(error){
        console.log(error)
    }else{        
     
        res.send(" <script> alert('Datos actualizados'); window.location.href = '/perfildocente/"+rut+"/1' </script> ")   
    }
})
}
//Metodo para agregar a favoritos

exports.favorito =(req,res)=>{

const rut_d =req.body.favorito;
const rut_a = req.body.rut;
const nombre =req.body.nombre;
const ap_pat = req.body.ap_pat;
const descripcion = req.body.descripcion;
const imagen = req.body.imagen;

conexion.query ("SELECT rut_a,rut_d FROM tbl_favorito WHERE rut_a = ? and rut_d = ?",[rut_a,rut_d],(error,results)=>{

    if(results.length == 0 ){

     conexion.query('INSERT INTO tbl_favorito set ?',{rut_d:rut_d,rut_a:rut_a},(error,results)=>{

        if(error){console.log(error)}
    
        res.send(" <script> alert('Lista de favorito actualizada '); window.location.href = '/verpublicacion/"+rut_a+"' </script> ")
    
    })
    }else{
    
        res.send(" <script> alert('Docente ya se encuentra en tú lista de favoritos'); window.location.href = '/verpublicacion/"+rut_a+"' </script> ")
    }

 
    
})



}





exports.mostarfav = async (req, res)=>{    
    try {

        
        const rut = req.params.rut 
        console.log(rut);
        conexion.query('SELECT rut,per.nombre,per.snombre,per.ap_pat,per.ap_mat,per.correo,per.telefono,doc.descripcion FROM tbl_docente as doc , tbl_persona as per WHERE per.rut = ? and per.rut = doc.rut_d',[rut],(error, results)=>{
            if(error){console.log(error)}
            
        res.render('verperfil',{rut:req.rut,results});
 
        })
    } catch (error) {
        console.log(error)
    }       
}



exports.perfilpubli = async (req, res)=>{    
    try {

        
        const rut = req.params.rut 
        conexion.query(' SELECT pu.id_publicacion,pu.contenido,pu.titulo,pu.precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_asignatura = asig.id_asignatura and pu.id_comuna = comu.id_comuna and pu.rut = ? order by id_publicacion',[rut],(error, results2)=>{
            if(error){console.log(error)}
           
 

        })
    } catch (error) {
        console.log(error)
    }       
}




exports.verperfil = async (req, res) => {
    const rutDocente = req.params.rutDocente;
    const rutEstudiante = req.body.rutEstudiante;

    try {
        // Consulta para obtener los datos del perfil del docente
        const consultaPerfil = await new Promise((resolve, reject) => {
            conexion.query('SELECT per.rut, per.nombre, per.snombre, per.ap_pat, per.ap_mat, per.correo, per.telefono, doc.descripcion, per.imagen, COALESCE(AVG(val.puntaje_valoracion), 0) as puntaje_valoracion FROM tbl_docente as doc JOIN tbl_persona as per ON per.rut = doc.rut_d LEFT JOIN tbl_valoracion as val ON per.rut = val.rut_d WHERE per.rut = ?', [rutDocente], (error, results) => {
                if (error) {
                    console.error('Error en la consulta de perfil de docente:', error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Consulta para obtener las publicaciones del docente
        const consultaPublicaciones = await new Promise((resolve, reject) => {
            conexion.query('SELECT pu.id_publicacion, pu.contenido, pu.titulo, pu.precio, mo.modalidad_nombre, ga.grado_nombre, asig.nombre_asignatura, comu.nombre_comuna FROM tbl_publicacion as pu INNER JOIN tbl_modalidad AS mo ON pu.id_modalidad = mo.id_modalidad INNER JOIN tbl_gradoacademico as ga ON pu.id_gradoacademico = ga.id_gradoacademico INNER JOIN tbl_asignatura as asig ON pu.id_asignatura = asig.id_asignatura INNER JOIN tbl_comuna as comu ON pu.id_comuna = comu.id_comuna WHERE pu.rut = ? ORDER BY pu.id_publicacion', [rutDocente], (error, results) => {
                if (error) {
                    console.error('Error en la consulta de publicaciones de docente:', error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(consultaPerfil);

        // Renderiza la vista con los resultados de ambas consultas
        res.render('verperfil', { rutDocente, rutEstudiante, consultaPerfil, consultaPublicaciones });

    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).send('Error en el servidor');
    }
};




exports.alumnoupdate = (req, res)=>{
    const rut = req.body.rut
    const correo = req.body.correo
    const telefono = req.body.telefono
    const imagen =req.body.imagen
conexion.query('UPDATE tbl_persona SET ? WHERE rut = ?',[{correo:correo,telefono:telefono,imagen:imagen},rut], (error, results)=>{
    if(error){
        console.log(error)
    }else{        
       
        res.send(" <script> alert('Información actualizada.'); window.location.href = '/perfilalumno/"+rut+"' </script> ")  
    }
})
}



exports.datosalumno = async (req, res)=>{    
    try {
        const rut = req.params.rut 
        conexion.query('SELECT rut,per.correo,per.telefono,per.imagen FROM tbl_alumno as al , tbl_persona as per WHERE per.rut = ? and per.rut = al.rut_a',[rut],(error, results)=>{
            if(error){console.log(error)}
        res.render('actualizardatosalumno',{rut:req.rut,user:results[0]});
        
        })
    } catch (error) {
        console.log(error)
    }       
}




exports.perfilalumno = async (req, res)=>{    
    try {
        const rut = req.params.rut 
        
        conexion.query('SELECT rut,per.nombre,per.snombre,per.ap_pat,per.ap_mat,per.correo,per.telefono,per.imagen FROM tbl_alumno as al , tbl_persona as per WHERE per.rut = ? and per.rut = al.rut_a',[rut],(error, results)=>{
            if(error){console.log(error)}
          
            const id = req.params.id;
            if(id=="2"){
                res.render('perfilalumno',{rut:req.rut,results:results, alert:false})
            }else{
                res.send(" <script> alert('NO PERMITIDO. CUENTA CON ROL DOCENTE'); window.location.href = '/' </script> ")
            }

            
 

        })
    } catch (error) {
        console.log(error)
    }       
}






exports.reputacion = async (req, res) => {
    try {
        const rut = req.body.rut_valorar;
        const puntaje_valoracion = req.body.demo;
        const comentario = req.body.comentario;
        const rut_a = req.body.rut_a;


        
        console.log("rut: " + rut + ", puntaje_valoracion: " + puntaje_valoracion + ", comentario: " + comentario + ", rut_a: " + rut_a);

        conexion.query('SELECT val.rut_a, val.rut_d FROM tbl_valoracion AS val, tbl_alumno AS al, tbl_docente AS doc WHERE val.rut_a = al.rut_a AND doc.rut_d = val.rut_d AND val.rut_a = ? AND val.rut_d = ?', [rut_a, rut], async (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Error en la consulta de verificación');
            }

            if (results.length > 0) {
                return res.send("<script>alert('Docente ya valorado.'); window.location.href = '/verpublicacion/" + rut_a + "'</script>");
            }

            conexion.query('INSERT INTO tbl_valoracion SET ?', { puntaje_valoracion: puntaje_valoracion, comentario: comentario, rut_d: rut, rut_a: rut_a }, (error, results) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send('Error al insertar valoración');
                }

                res.send("<script>alert('Gracias por valorar al profesor.'); window.location.href = '/verpublicacion/" + rut_a + "'</script>");
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};