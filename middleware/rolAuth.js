const { verifyToken } = require('../controllers/authController',authController.login);
const conexion = require('../database/db');

const checkRole = (roles) => async (req, res, next) => {
    try {

        const tokenData = await verifyToken(token)
        conexion.query = ('SELECT rut FROM tbl_persona WHERE rut = ?',[tokenData.rut],(error,results)=>{

        const userData = results;

        })
        

        
        if ([].concat(roles).includes(userData.id_rol)) { 
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Seguridad de cors' })
    }

}

module.exports = checkRoleAuth