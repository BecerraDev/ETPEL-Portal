const conexion = require('../database/db')

//metodo para buscar las publicaciones por comuna

exports.buscarpublicacionescomuna = async (req, res)=>{    
    try {
        const comuna =req.body.comuna
        const rut =req.body.rut

        conexion.query('SELECT id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen,per.imagen,per.rut,per.nombre,per.snombre FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu,tbl_persona as per WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_asignatura = asig.id_asignatura  and pu.id_comuna = comu.id_comuna and pu.rut=per.rut and pu.id_comuna = ?  order by pu.id_publicacion',[comuna],(error, results)=>{
            if(error){console.log(error)}
        console.log(results)
        if(results==""){          
    }
        res.render('verpublicacioncomuna',{rut:req.rut,results:results})

        })
    } catch (error) {
        console.log(error)
    }       
}

//metodo para ver las publicaciones
exports.publicacion = async (req, res)=>{    
    try {

        const rut = req.params.rut
        conexion.query('SELECT pu.rut,id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen,per.imagen FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu,tbl_persona as per WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_asignatura = asig.id_asignatura and pu.id_comuna = comu.id_comuna and pu.rut = per.rut order by id_publicacion',(error, results)=>{
            if(error){console.log(error)}
            conexion.query('SELECT * FROM tbl_region ORDER BY id_region desc',function(err,rows){
                res.render('verpublicacion',{rut:req.rut,results:results,data:rows})
  
            })
         
        })
    } catch (error) {
        console.log(error)
    }       
}



//metodo para actualizar una publicacion
exports.update = (req, res)=>{
    const id_publicacion = req.body.id_publicacion
    const contenido = req.body.contenido
    const titulo = req.body.titulo
    const precio = req.body.precio
    const modalidad = req.body.modalidad
    const comuna = req.body.comuna
    const resumen =req.body.resumen
    const rut = req.body.rut
conexion.query('UPDATE tbl_publicacion SET ? WHERE id_publicacion = ?',[{contenido:contenido,titulo:titulo,precio:precio,id_modalidad:modalidad,id_comuna:comuna,resumen:resumen}, id_publicacion], (error, results)=>{
    if(error){
        console.log(error)
    }else{           
        res.send(" <script> alert('DATOS ACTUALIZADOS'); window.location.href = '/publicaciones/"+rut+"' </script> ")
    }
})
}

// metodo publicar Insertar datos en la tabla publicacion.
exports.publicar = async (req, res)=>{    
    try {
        const contenido = req.body.contenido
        const titulo = req.body.titulo
        const precio = req.body.precio
        const modalidad = req.body.modalidad
        const gradoa = req.body.gradoa
        const asignatura = req.body.asignatura
        const comuna = req.body.comuna
        const rut =req.body.rut
        const resumen = req.body.resumen  
        conexion.query('INSERT INTO tbl_publicacion SET ?', {contenido:contenido, titulo:titulo,precio:precio,id_modalidad:modalidad,id_gradoacademico:gradoa,id_asignatura:asignatura,id_comuna:comuna,rut:rut,resumen:resumen}, (error, results)=>{
            if(error){console.log(error)}
            res.send(" <script> alert('PUBLICACION EXITOSA'); window.location.href = '/perfildocente/"+rut+"/1' </script> ")
        })
    } catch (error) {
        console.log(error)
    }       
}


//Metodo para buscar publicacion por asignatura
exports.buscarasignatura = async (req, res)=>{    
    try {
        const asignatura =req.body.asignatura  
        conexion.query('SELECT id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen,per.imagen FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu,tbl_persona as per,tbl_docente as doc WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_comuna = comu.id_comuna and pu.id_asignatura =asig.id_asignatura and pu.rut=doc.rut_d and pu.rut = per.rut and pu.id_asignatura = ? order by pu.id_publicacion',[asignatura],(error, results)=>{
            if(error){console.log(error)}
        
        res.render('verpublicacionasig',{results:results})

        })
    } catch (error) {
        console.log(error)
    }       
}


//Metodo para buscar publicacion modalidad
exports.buscarmodalidad = async (req, res)=>{    
    try {
        const modalidad =req.body.modalidad  
        conexion.query('SELECT id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen,per.imagen FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu,tbl_persona as per,tbl_docente as doc WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_comuna = comu.id_comuna and pu.id_asignatura =asig.id_asignatura and pu.rut=per.rut and pu.rut=doc.rut_d and pu.id_modalidad = ? order by pu.id_publicacion',[modalidad],(error, results)=>{
            if(error){console.log(error)}
        
        res.render('verpublicacionmodalidad',{results:results})

        })
    } catch (error) {
        console.log(error)
    }       
}
//Metodo para buscar publicacion grado academico
exports.buscargradoa = async (req, res)=>{    
    try {
        const gradoa =req.body.gradoa  
        conexion.query('SELECT id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen,per.imagen FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu,tbl_persona as per,tbl_docente as doc WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_comuna = comu.id_comuna and pu.id_asignatura =asig.id_asignatura and pu.rut=doc.rut_d and pu.rut=per.rut and pu.id_gradoacademico = ? order by pu.id_publicacion',[gradoa],(error, results)=>{
            if(error){console.log(error)}
        
        res.render('verpublicaciongradoa',{results:results})

        })
    } catch (error) {
        console.log(error)
    }       
}




