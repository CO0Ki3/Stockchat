/**
 * Created by janghunlee on 2017. 8. 9..
 */
var userData;
var userId;

function setCookie(name){

}
$(document).ready(function(){
    "use strict";
    var data = document.cookie.cookieData;
    console.log(data);
});

$(".sign-up-btn").click(function(){
    "use strict";
    var id = $(".id").val();
    var ps = $(".ps").val();
    var email = $(".email").val();
    var name = $(".nickname").val();

    $.ajax({
        method:"POST",
        data:{"id":id,"password":ps,"email":email,"mail_service":true},
        url:"http://45.32.44.227:3000/auth/register",
        success:function(data){
            console.log(data);
            userId = id;
        },
        error:function(err){
            console.log(err);
        }
    })
});

$(".event-button").click(function(){
    "use strict";
    var id = $(".login-id").val();
    var ps = $(".login-ps").val();

    $.ajax({
        method:"POST",
        data:{"id":id,"password":ps},
        url:"http://45.32.44.227:3000/auth",
        success:function(data){
            console.log(data);
            userId = id;
        },
        error:function(err){
            console.log(err);
        }
    })
});

$(".search-stock").click(function(){
    "use strict";
    var name = $(".search-icon").val();
    if(name == ""){
        alert("종목을 입력해주세요");
    }
    else{
        $.ajax({
            method:"POST",
            url:"http://45.32.44.227:3000/stock/query?query="+name,
            success:function(data){
                console.log(data);
                userData = data;
                console.log(userData)
                var html = "";
                for(var i = 0; i <data.length; i++){
                    html += "<div class=\"event-add-content\">"
                    html += "<div class=\"content-number n\">"+data[i]["code"]+"</div>"
                    html += "<div class=\"content-name n\">"+data[i]["title"]+"</div>"
                    html + "<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
                    html += "</div>"
                }
                $(".event-add-list").html(html);

                $(".n").click(function(){
                    console.log("heelo");
                    "use strict";
                    var text = $(this).text();
                    console.log(text);
                    var data;
                    for(var i = 0; i <userData.length; i++){
                        if(userData[i]["title"] == text){
                            data = userData[i];
                            console.log("Success");
                        }
                    }
                    console.log(data);
                    var html = "<div class=\"jutalk-list-content\">"
                    html += "<div class=\"list-code\">"+data["code"]+"</div>";
                    html += "<div class=\"list-name\">"+data["title"]+"</div>";
                    html += "<div class=\"list-price\">"+data["current_val"]+"</div>";
                    html += "<div class=\"list-bi\">"+data["diff_percentage"]+"</div>";
                    if(data["up_down"] == "up"){
                        html += "<div class=\"list-per\">"+"등락"+"</div>";
                    }
                    else{
                        html += "<div class=\"list-per\">"+"하락"+"</div>";
                    }
                    html+="<div class=\"list-star\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></div> <div class=\"list-chat\"> <div class=\"list-chat-btn\">참여</div> </div>"
                    $(".jutalk-board").append(html);
                    setCookie(data["title"]);
                });

            },
            error:function(err){
                console.log(err);
            }
        })
    }

});

