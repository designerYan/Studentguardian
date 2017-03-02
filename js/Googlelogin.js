var googleUser = {};
var startApp = function() {
    gapi.load('auth2', function(){
        auth2 = gapi.auth2.init({
            client_id: '357884399433-0p41d5gkf0rd9nnvm0is6sj722akck9u.apps.googleusercontent.com',
            cookiepolicy: 'http://studentguardian.wenyanhu.ca',
   
        });
        attachSignin(document.getElementById('google'));
    });
};

function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            
            alert("Successfull login with your Google account.");
            window.location.href = "./schedule-test.html";
        
            var profile = googleUser.getBasicProfile();
            
            if (typeof(Storage) !== "undefined") {    
                localStorage.setItem("uname", profile.getGivenName());
                localStorage.setItem("upicture",  profile.getImageUrl());    
                }
            
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}




