var sinBut = document.getElementById("signin");
var supBut = document.getElementById("signup");
var nameInput = document.getElementById("name");
var pwdInput = document.getElementById("password");
var logBut = document.getElementById("log");
var getpwdLink = document.getElementById("getpwd");
var emailInput = document.getElementById("email");
var loginDiv = document.getElementById("login");
    

sinBut.onclick = function(){
    sinBut.style.display = "none";
    supBut.style.display = "none";
    var u_input = document.createElement("input");
    u_input.require = "require";
    u_input.placeholder="User Name";
    u_input.id = "myusernameinput";
    loginDiv.appendChild(u_input);
    u_input.autofocus = "autofocus";
    var p_input = document.createElement("input");
    p_input.id = "mypassword";
    p_input.require = "require";
    p_input.placeholder="Password";
    loginDiv.appendChild(p_input);
    var L_But = document.createElement("button");
    L_But.innerHTML = "Log in";
    L_But.id = "mylog";
    loginDiv.appendChild(L_But);
    
    L_But.onclick = function(){
        
        $.ajax(
        {
            url:"test.php",
            type:"get",
            data:{
                username:u_input.value,
                password:p_input.value
            },
            dataType:"json",
            success:function(resp){
                console.log(resp);
                if(resp.length > 0){
                    alert("Successful login");
                    window.location.href = "./schedule-test.html";
                }else{
                    alert("OOhs, Your username and password is NOT match! Try it again.");
                    u_input.value = "";
                    p_input.value = "";
                }
            }
        }
        );
    }
}




supBut.onclick = function(){
    sinBut.style.display = "none";
    supBut.style.display = "none";
    nameInput.style.display = "inline";
    pwdInput.style.display = "inline";
    logBut.innerHTML = "Register";
    logBut.style.marginTop = "10%";
    pwdInput.style.marginTop = "10%";
    logBut.style.marginTop = "10%";
    emailInput.style.marginTop = "10%";
    emailInput.style.display = "inline";
    logBut.style.display = "inline";
}

function checkName(input) {
          if(input.validity.valueMissing) {
              input.setCustomValidity("You must enter a name!");
              logBut.disabled = true;
          } else{
              input.setCustomValidity(""); 
         }
        }

function checkPassword(input){
           if(input.validity.valueMissing) {
              input.setCustomValidity("Password has to be filled in!");
              logBut.disabled = true;

          } else {
              input.setCustomValidity("");
              
          }    
        }

function checkEmail(input){
           var x = emailInput.value;
           var atpos = x.indexOf("@");
           var dotpos = x.lastIndexOf(".");
           if(input.validity.valueMissing) {
              input.setCustomValidity("Email has to be filled in!");
              logBut.disabled = true;
          }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            input.setCustomValidity("Your email should follow the format");
            logBut.disabled = true;
         }else {
              input.setCustomValidity("");
              logBut.disabled = false;
          }    
        }


$(document).ready(function(){
   
logBut.onclick = function(){
        
   $.ajax(
        {
             url:"test.php",
             type:"post",
             data:{
                    name:nameInput.value,
                    email:emailInput.value,
                    password:pwdInput.value,
                    type:"reg"
                },
             success:function(resp){
                    console.log(resp);
                    nameInput.value = "";
                    emailInput.value = "";
                    pwdInput.value = "";
                    window.location.href = "./index.html";
                    alert(resp);
                }
        }
   );
}
    
});



