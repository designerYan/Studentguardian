var userImage = document.getElementById("userimg");
var userName = document.getElementById("greeting");

userImage.src =  localStorage.getItem("upicture");
userName.innerHTML = "Hi, " + localStorage.getItem("uname");

     $(document).ready(function(){
             $.ajax({
            url:"sessionstoreusername.php",
            type:"get",
            dataType:"json",
            success:function(resp){
                console.log(resp);
                $("#userimg").attr("src", "img/user-default.png");
                var name = "Hi, " + resp.username;
                $("#greeting").text(name);
            }
        });
        }) 
     
var LOUT = document.getElementById("logout");


LOUT.onclick = function(){
    console.log("CLICKED");
 
      localStorage.removeItem("upicture");
      localStorage.removeItem("uname");
      
    
      $.ajax({
          url:"sessionuserlogout.php",
          success:function(){
              alert("Successfully logout with your account");
              window.location.href = "./index.html";
          }
      });
    };
 

