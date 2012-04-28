function msgReceived(msg) {
  $echoField.html(msg.data);
}

$(document).ready(function() {
  $echoField = $('#echoField');
  $inputField = $('#inputField');
  $inputField.keyup(function() {
    socket.send($(this).val());
  });

  var socket = io.connect();
  socket.on('message', function(msg) {
    msgReceived(msg);
  });
});