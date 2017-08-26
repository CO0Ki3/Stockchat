/**
 * Created by hyeondokko on 2017. 8. 26..
 */

// var socket = io();
// $('.jutalk-chat-content').on('submit', function(e) {
//   socket.emit('send message', $('.jutalk-chat-input-box').val());
//   $('jutalk-chat-input-box').val("");
//   $("jutalk-chat-input-box").focus();
//   e.preventDefault();
// });
// socket.on('receive message', function(msg) {
//   $('.jutalk-chat-content').append(msg + "\n");
//   $('.jutalk-chat-content').scrollTop($('.jutalk-chat-content')[0].scrollHeight);
// });

function addParticipantsNumber (data) {
    $(".num").append(numUsers + "/50");
    $(".room-num").append(numUsers + "/50");
}

// function showParticipantName() {
//     var table = "<div class="jutalk-chat-list-user-box">";
//     table += "<div class="jutalk-user">"
// }

$(".room-go").click(function() {
  var roomName = $(".room-name-text");
  $(".jutalk-chat-title-content-room").text("");
  $(".jutalk-chat-title-content-room").text(roomName);
  console.log(roomName);
});
