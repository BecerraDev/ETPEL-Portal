
const socket = io.connect('http://localhost:3000');
var myName = "";
var otherPersonName = "";

function enterName() {
  myName = document.getElementById("rut").value;
  socket.emit("user_connected", myName);
  alert("Conectado");
  return false;
}



function sendMessage() {
  var emisor = document.getElementById("rut").value
  var message = document.getElementById("message").value;

  socket.emit("send_message", {
    "sender": emisor,
    "receiver": otherPersonName,
    "message": message
  });

  var html = "";
  html += '<div class="outgoing_msg">';
    html += '<div class="sent_msg">';
      html += '<p>' + message + '</p>';
    html += '</div>';
  html += '</div>';
  document.getElementById("messages").innerHTML += html;
message="";
  return false;
  
}

socket.on("message_received", function (data) {

  var html = "";
  html += '<div class="incoming_msg">';
    html += '<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>';
    html += '<div class="received_msg">';
      html += '<div class="received_withd_msg">';
        html += '<p>' + data.message + '</p>';
      html += '</div>';
    html += '</div>';
  html += '</div>';

  document.getElementById("messages").innerHTML += html;
  document.getElementById("form-send-message").style.display = "";
  document.getElementById("messages").style.display = "";

  otherPersonName = data.sender;

});

function onUserSelected(self) {
    document.getElementById("form-send-message").style.display = "";
    document.getElementById("messages").style.display = "";
    document.getElementById("messages").innerHTML = "";
    otherPersonName = self.getAttribute("data-username");

    $.ajax({
      url: 'http://localhost:3000/get_messages',
      method: "POST",
      data: {
        "sender": myName,
        "receiver": otherPersonName,    
      },

      success: function (response) {
       console.log(response)
        var mensaje = JSON.parse(response);
        var html = "";

        for (var a = 0; a < mensaje.length; a++) {
          
          if (mensaje[a].sender == myName) {
            html += '<div class="outgoing_msg">';
              html += '<div class="sent_msg">';
                html += '<p>' + mensaje[a].mensaje + '</p>';
              html += '</div>';
            html += '</div>';
          } else {
            html += '<div class="incoming_msg">';
              html += '<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>';
              html += '<div class="received_msg">';
                html += '<div class="received_withd_msg">';
                  html += '<p>' + mensaje[a].mensaje + '</p>';
                html += '</div>';
              html += '</div>';
            html += '</div>';
          }
          
        }

        document.getElementById("messages").innerHTML = html;
      }
    });
}

socket.on("user_connected", function (username) {


  var html = "";
  html += '<div class="chat_list" data-username="' + username + '" onclick="onUserSelected(this);">';
      html += '<div class="chat_people">';
          html += '<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>';
          html += '<div class="chat_ib">';
            html += '<h5>'  +username+ '</h5>';
          html += '</div>';
      html += '</div>';
  html += '</div>';
  document.getElementById("users").innerHTML += html;
});

