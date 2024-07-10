
const conexion = require('../database/db') 

//Socket connection
function socket(io) {

var users =[]

  io.on("connection", function (socket) {
    socket.on("user_connected", function (username) {
      users[username] = socket.id;
      io.emit("user_connected", username);

    });
  
    socket.on("send_message", function (data) {
      var socketId = users[data.receiver];
      socket.to(socketId).emit("message_received", data);

      
   
      conexion.query('INSERT INTO tbl_chat set ?',{emisor:data.sender,receptor:data.receiver,mensaje:data.message},(error, results)=>{
        if(error){console.log(error)}
    console.log(results)


    })
    });
  });







}
module.exports = socket;