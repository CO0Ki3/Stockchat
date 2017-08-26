/**
 * Created by janghunlee on 2017. 5. 5..
 */


$(".jutalk-chat-title-content, .jutalk-chat-title-content-room").click(function () {


    var contentName = $(this).text();

    if(contentName == "접속자"){
        $(".jutalk-chat-list").css({"display":"block"});

        $(".jutalk-chat-content").css({"display":"none"});
        $(".jutalk-chat-room").css({"display":"none"});
        $(".jutalk-chat-rule").css({"display":"none"});
        $(".jutalk-chat-bottom").css({"display":'none'});
    }
    else if(contentName == "접속규정"){
        $(".jutalk-chat-rule").css({"display":"block"});

        $(".jutalk-chat-content").css({"display":"none"});
        $(".jutalk-chat-list").css({"display":"none"});
        $(".jutalk-chat-room").css({"display":"none"});
        $(".jutalk-chat-bottom").css({"display":'none'});
    }
    else if(contentName == "채팅방"){
        $(".jutalk-chat-room").css({"display":"block"});

        $(".jutalk-chat-content").css({"display":"none"});
        $(".jutalk-chat-list").css({"display":"none"});
        $(".jutalk-chat-rule").css({"display":"none"});
        $(".jutalk-chat-bottom").css({"display":'none'});
    }
    else{
        $(".jutalk-chat-content").css({"display":"block"});
        $(".jutalk-chat-bottom").css({"display":'flex'});

        $(".jutalk-chat-list").css({"display":"none"});
        $(".jutalk-chat-room").css({"display":"none"});
        $(".jutalk-chat-rule").css({"display":"none"});
    }
});

$(".sign-up").click(function(){
    $(".sign-up-popup").css({"display":"block"});
});

$(".sign-up-popup-close").click(function(){
    $(".sign-up-popup").css({"display":"none"});
});

$(".board-title-btn").click(function(){
    $(".event-add-pop-up").css({"display":"block"});
});

$(".event-add-pop-up-cloes").click(function(){
    $(".event-add-pop-up").css({"display":"none"});
});

$(".login").click(function(){
    $(".event-login").css({"display":"block"});
});

$(".event-login").keydown(function(event){
    var keyCode = event.keyCode;

    if(keyCode == 27){
        $(".event-login").css({"display":"none"});
    }
});

$(".event-add-btn").click(function () {
    $(".event-add-pop-up").css({"display":"none"});
});

$(".event-signup-text").click(function(){
    $(".event-login").css({"display":"none"});
    $(".sign-up-popup").css({"display":"block"});
});


$(".event-password-text").click(function(){
    $(".event-login").css({"display":"none"});
    $(".event-passfind").css({"display":"block"});
});

$(".passfind-id").click(function(){
    $(".event-passfind").css({"display":"none"});
    $(".event-findid").css({"display":"block"});
});

$(".passfind-ps").click(function(){
    $(".event-passfind").css({"display":"none"});
    $(".event-findps").css({"display":"block"});
});

$(".findps-btn").click(function(){
    $(".event-findps").css({"display":"none"});
});

$(".findid-btn").click(function(){
    $(".event-findid").css({"display":"none"});
})

$(".login-btn").click(function () {
    $(".sign-up-popup").css({"display":"none"});
    $(".event-login").css({"display":"block"});
});
