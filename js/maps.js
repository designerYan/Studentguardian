var yourplace = document.getElementById("place");

var getplace = localStorage.getItem("end").toUpperCase();
var separate = getplace.split(" ");
var yourclass = separate[0].match(/SW1|SW2|SW3|SW5|SE2|SE8|SE12|SE14|SE16/gi);
console.log(yourclass);

if(yourclass == "SW1"){
    var getsw1 = document.getElementById("sw1");
    getsw1.selected = true;
}
if(yourclass == "SW2"){
    var getsw2 = document.getElementById("sw2");
    getsw2.selected = true;
}
if(yourclass == "SW3"){
    var getsw3 = document.getElementById("sw3");
    getsw3.selected = true;
}
if(yourclass == "SW5"){
    var getsw5 = document.getElementById("sw5");
    getsw5.selected = true;
}
if(yourclass == "SE2"){
    var getse2 = document.getElementById("se2");
    getse2.selected = true;
}
if(yourclass == "SE8"){
    var getse8 = document.getElementById("se8");
    getse8.selected = true;
}
if(yourclass == "SE12"){
    var getse12 = document.getElementById("se12");
    getse12.selected = true;
}
if(yourclass == "SE14"){
    var getse14 = document.getElementById("se14");
    getse14.selected = true;
}
if(yourclass == "SE16"){
    var getse16 = document.getElementById("se16");
    getse16.selected = true;
}

var map;

function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: {lat: 49.251221, lng: -123.003472}
        });
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('top-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
    
        var infoWindow = new google.maps.InfoWindow({map: map});

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(position.coords.latitude, position.coords.longitude); 
            
            if (typeof(Storage) !== "undefined") {    
                localStorage.setItem("lati", position.coords.latitude);
                localStorage.setItem("longi",  position.coords.longitude);    
                }  
              
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are HERE now');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
    
     

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        yourplace.value = localStorage.getItem("lati") + ", " + localStorage.getItem("longi");
    
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;

          
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

}

        
 