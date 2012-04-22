function msgReceived(msg) {
  $clientCounter.html(msg.clients);
}

$(document).ready(function() {
  $clientCounter = $('#client_count');

  var socket = io.connect();
  socket.on('message', function(msg) {
    msgReceived(msg);
  });
});