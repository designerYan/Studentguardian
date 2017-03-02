window.myuser = {
    name:null,
    image:null
}


window.fbAsyncInit = function() {
    FB.init({
      appId      : '1778792972374349',
      xfbml      : true,
      version    : 'v2.7'
    });
    
     
     var FBbut = document.getElementById("facebook");
     
     FBbut.onclick = function(){
        
         FB.login(function(resp){
            console.log(resp);
            if(resp.status = "connected"){
                console.log(resp.authResponse.userID);
                alert("Successfully login with your Facebook account");
                window.location.href = "./schedule-test.html";
                FB.api('/me?fields=name,picture', function(data){
                console.log(data.name);
                console.log(data.picture.data.url);    
                
                window.myuser.name = data.name;
                window.myuser.image = data.picture.data.url;
   
                localStorage.setItem("uname", window.myuser.name);
                localStorage.setItem("upicture",  window.myuser.image);    

                
                    
             });
            }
         });
          
     }
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


