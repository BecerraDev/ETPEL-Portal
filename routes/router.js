const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const conexion = require('../database/db')
const publicacionController = require('../controllers/publicacionController')
const chatController = require ('../controllers/chatController')


//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {rut:req.rut, alert:false})

})
//router para el login
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
//router para registrarse
router.get('/register', (req, res)=>{
    res.render('register')
})
//router para publicar
router.get('/publicar/:rut', authController.isAuthenticated, (req, res)=>{
 
    conexion.query('SELECT * FROM tbl_region ORDER BY id_region desc',function(err,rows){
        res.render('publicar',{rut:req.rut,data:rows})
    }) 
})

 //router para ver las publicaciones

 router.get('/verpublicacion/:rut', authController.isAuthenticated, publicacionController.publicacion, (req, res) => {
});
// router de mostrar publicaciones por rut
router.get ('/publicaciones/:rut',authController.isAuthenticated,(req,res)=>{   
    const rut = req.params.rut
        conexion.query('SELECT id_publicacion,contenido,titulo,precio,mo.modalidad_nombre,ga.grado_nombre,asig.nombre_asignatura,comu.nombre_comuna,pu.resumen FROM tbl_publicacion as pu,tbl_modalidad AS mo , tbl_gradoacademico as ga, tbl_asignatura as asig, tbl_comuna as comu WHERE pu.id_modalidad = mo.id_modalidad and pu.id_gradoacademico = ga.id_gradoacademico and pu.id_asignatura = asig.id_asignatura and pu.id_comuna = comu.id_comuna and pu.rut = ? order by id_publicacion',rut,(error, results)=>{
             res.render('publicaciones',{rut:req.rut,results:results});
             })
})
// router para mostrar perfil alumno
router.get('/perfilalumno/:rut/:id',authController.isAuthenticated,authController.perfilalumno, (req, res)=>{
    res.render('perfilalumno', {alert:false})
})
// router mostrar perfil docente
router.get('/perfildocente/:rut/:id',authController.isAuthenticated,authController.perfildoc, (req, res)=>{
    res.render('perfildocente', {alert:false})
})
//router para actualizar datos del docente
router.get('/actualizardatosdocente/:rut',authController.isAuthenticated,authController.datosdocente)

//router para actualizar datos del alumno
router.get('/actualizardatosalumno/:rut',authController.isAuthenticated,authController.datosalumno)
///router para mostrar el chat
router.get('/chat',authController.isAuthenticated,(req,res)=>{
    res.render('chat',{rut:req.rut})
    
})

//router para ver perfiles
//router.post('/verperfil/:rutDocente', (req, res) => {
    //const rutDocente = req.params.rutDocente;
    //const rutEstudiante = req.body.rutEstudiante;

    // Procesamiento de datos, consultas a la base de datos, etc.

  //  res.render('verperfil', { rutDocente, rutEstudiante });
//});



























// router de actualizar publicacion
router.get('/edit/:id',authController.isAuthenticated, (req,res)=>{    
    const id = req.params.id;

    conexion.query('SELECT * FROM tbl_publicacion WHERE id_publicacion = ?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{
            conexion.query('SELECT * FROM tbl_region ORDER BY id_region desc',function(err,rows){
                res.render('edit', {rut:req.rut,user:results[0],data:rows})
            })            
                        
        }        
    })
})




//router para borrar una publicacion
router.get('/delete/:id',authController.isAuthenticated, (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM tbl_publicacion WHERE id_publicacion = ?',[id], (error, results)=>{
        if(error){
            console.log(error)
        }else{           
            res.redirect('/')       
        }
    })
})

//router bandeja de entrada
router.get('/bandejadeentrada/:rut',authController.isAuthenticated,chatController.bandejaentrada,(req,res)=>{
const rut = req.body.rut;

res.render('bandejadeentrada',{rut:req.rut,results})


})
//router mostrar favorito
router.get('/mostrarfavorito/:rut',authController.isAuthenticated,chatController.mostrarfavoritos)


router.get('/error',(req,res)=>{
res.render('error', {alert:false})
})

router.get('/enviarmensajebandeja/:emisor',authController.isAuthenticated,(req,res)=>{
    const emisor = req.params.emisor;

    conexion.query('SELECT emisor,receptor,mensaje,per.rut FROM tbl_chat,tbl_persona as per WHERE emisor = ?  and per.rut = ? group by emisor ',[emisor,emisor],(error, results)=>{

        res.render('enviarmensajebandeja',{rut:req.rut,results})
        
      
      
      })

})


router.post('/verperfil/:rutDocente', authController.verperfil);

//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/publicar',publicacionController.publicar)
router.post('/update',publicacionController.update)
router.post('/verpublicacioncomuna',authController.isAuthenticated,publicacionController.buscarpublicacionescomuna)
router.post('/verpublicacionasig',publicacionController.buscarasignatura)
router.post('/verpublicacionmodalidad',publicacionController.buscarmodalidad)
router.post('/verpublicaciongradoa',publicacionController.buscargradoa)
router.post('/docenteupdate',authController.docenteupdate)
//router.post('/verperfil',authController.verperfil)
router.post ('/favorito',authController.favorito)
router.post('/alumnoupdate',authController.alumnoupdate)
router.post('/reputacion',authController.reputacion)
router.post('/insertamensajeoffline',chatController.insertarmensajeoffline)
router.post('/insertamensajebandeja',chatController.insertamensajebandeja)





router.post('/get_messages', function (req, res) {
	conexion.query("SELECT * FROM tbl_chat WHERE (emisor = '" + req.body.sender + "' AND receptor = '" + req.body.receiver + "') OR (emisor = '" + req.body.receiver + "' AND receptor = '" + req.body.sender + "')", function (error, mensaje) {
		if(error){console.log("error del json de mensajes"+error)}
        res.end(JSON.stringify(mensaje));
        console.log(mensaje)
	});
});



// agregar metodo para agregar amigos que estara en la tabla favoritos

// metodo para poblar el ajax con ciudades
router.post('/get-states-by-country', function(req, res) {
    conexion.query('SELECT * FROM tbl_ciudad WHERE id_region = "' + req.body.region_id + '"',
    function(err, rows, fields) {
    if (err) {
    res.json({
    msg: 'error'
    });
    } else {
    res.json({
    msg: 'success',
    states: rows
    })
    }
    })
    })



    /// metodo para poblar el ajax con comunas
    router.post('/get-cities-by-state', function(req, res) {
        conexion.query('SELECT * FROM tbl_comuna WHERE id_ciudad = "' + req.body.ciudad_id + '"',
        function(err, rows, fields) {
        if (err) {
        res.json({
        msg: 'error'
        });
        } else {
        res.json({
        msg: 'success',
        cities: rows
        })
        }
        })
        })










module.exports = router