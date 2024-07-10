const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // Puerto que estás utilizando (3307 en tu caso)
    user: 'root',
    password: '', // Contraseña de tu base de datos
    database: 'proyectofinal'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a la base de datos MariaDB');
});

module.exports = connection