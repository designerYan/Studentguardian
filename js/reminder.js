  $(document).ready(function() {
		
                   
          $.ajax({
             url:"grabuserinfo.php",
             type:"get",
             dataType:"json",
             success:function(resp){
                    var events = [];
                 console.log(resp);
                    for(var i=0; i<resp.length; i++){
                        
                    //console.log(resp);
                 
                    var obj ={
                        title : resp[i].title, 
                       start : resp[i].start +":00", 
                       end : resp[i].end+":00"
                    }
                    
                    //event.allDay = false;
                    events.push(obj);
                    }
                    
                    
                    console.log(events);
                    //document.body.removeChild(inputDiv);
                    $('#calendar').fullCalendar('addEventSource', events);             
                   
            }
            });


		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,listDay,listWeek,'
			},

			views: {
				listDay: { buttonText: 'list day' },
				listWeek: { buttonText: 'list week' }
			},

			defaultView: 'listWeek',
			defaultDate: '2016-12-07',
			navLinks: true, 
			editable: true,
			eventLimit: true, 
            /*events:[
				{
					title: 'php project',
					start: '2016-11-21T14:20:00',
					end: '2016-11-21T16:30:00'
				},
				
				{
					title: 'Study',
					start: '2016-11-22T09:30:00',
					end: '2016-11-22T23:00:00'
				},
			],*/
            

            eventClick: function(calEvent, jsEvent, view) {
                console.log(calEvent);
                createInputDiv();
                var separateinfo = calEvent.start._i.split("T");
                console.log(separateinfo);
                var separateinfo2 = calEvent.end._i.split("T");
                console.log(separateinfo2);
                titinp.value = calEvent.title;
                starinp.value = separateinfo[0];
                starinp2.value = separateinfo[1];
                endinp.value = separateinfo2[0];
                endinp2.value = separateinfo2[1];
                //$('#calendar').fullCalendar('addEventSource',events); 
            }
		});
		
      
var add = document.getElementById("add");
var inputDiv = document.createElement("div");
var tit = document.createElement("h2");
var div = document.createElement("div");
var titname = document.createElement("h4");
var titinp = document.createElement("input");
var div1 = document.createElement("div");
var star = document.createElement("h4");
var starinp = document.createElement("input");
var div2 = document.createElement("div");
var star2 = document.createElement("h4");
var starinp2 = document.createElement("input");
var div3 = document.createElement("div");
var end = document.createElement("h4");
var endinp = document.createElement("input");
var div4 = document.createElement("div");
var endtime = document.createElement("h4");
var endinp2 = document.createElement("input");
var subBut = document.createElement("button");
var existBut = document.createElement("button");

function createInputDiv(){
    inputDiv.id = "inpDiv";
    document.body.appendChild(inputDiv);
    
    tit.innerHTML = "Add Your upcoming due";
    inputDiv.appendChild(tit);
    
    div.id = "mydiv";
    inputDiv.appendChild(div);
    
    
    titname.innerHTML = "Due Event: ";
    titname.id = "titleNAme";
    div.appendChild(titname);
    
    
    titinp.placeholder = "Due event";
    titinp.id = "titleinp";
    div.appendChild(titinp);
    
    div1.id = "mydiv1";
    inputDiv.appendChild(div1);
    
    
    star.innerHTML = "Start date: ";
    star.id = "startdate";
    div1.appendChild(star);
    
    
    starinp.type = "date";
    starinp.id = "starinp";
    div1.appendChild(starinp);
    
    div2.id = "mydiv2";
    inputDiv.appendChild(div2);
    
    
    star2.innerHTML = "Start time: ";
    star2.id = "startTime";
    div2.appendChild(star2);
    

    starinp2.type = "time";
    starinp2.id = "starinp2";
    div2.appendChild(starinp2);
    
    div3.id = "mydiv3";
    inputDiv.appendChild(div3);
    
    
    end.innerHTML = "End date: ";
    end.id = "endate";
    div3.appendChild(end);
    
    
    endinp.type = "date";
    endinp.id = "myendinp";
    div3.appendChild(endinp);
    
    div4.id = "mydiv4";
    inputDiv.appendChild(div4);
    
    
    endtime.innerHTML = "End time: ";
    endtime.id = "endime";
    div4.appendChild(endtime);
    
    
    endinp2.type = "time";
    endinp2.id = "myendinp2";
    div4.appendChild(endinp2);
    
    subBut.id = "myButton";
    subBut.innerHTML = "Submit";
    inputDiv.appendChild(subBut);
    
    existBut.id = "myButton2";
    existBut.innerHTML = "Exit";
    inputDiv.appendChild(existBut);
    
    existBut.onclick = function(){
        document.body.removeChild(inputDiv);
    }
}      
      
      
add.onclick = function(){
   
    createInputDiv();
    
}
   
 subBut.onclick = function(){
  
       var dueinp = document.getElementById("titleinp");    
       var startdateinp = document.getElementById("starinp"); 
       var startimeinp = document.getElementById("starinp2");     
       var enddateinp = document.getElementById("myendinp"); 
       var endtimeinp = document.getElementById("myendinp2");     
     
       $.ajax(
        {
             url:"test.php",
             type:"post",
             data:{
                    dueevent:dueinp.value,
                    startdate:startdateinp.value,
                    starttime:startimeinp.value,
                    enddate:enddateinp.value,
                    endtime:endtimeinp.value,
                    type:"reminder"
                },
             success:function(resp){
                    console.log(resp);
                    dueinp.value = "";
                    startdateinp.value = "";
                    startimeinp.value = "";
                    enddateinp.value = "";
                    endtimeinp.value = "";
                }
        }
   );
       
       
       var start_num = startdateinp.value +
        'T' + startimeinp.value;
       
       var end_num = enddateinp.value +
        'T' + endtimeinp.value;
     
        console.log(dueinp.value); 
        console.log(start_num);  
        console.log(end_num);  

        var events = new Array();
    
        var start_date = start_num;
        var end_date = end_num;
        var event_name = dueinp.value;
        event = new Object();       
        event.title = event_name; 
        event.start = start_date; 
        event.end = end_date;
        event.allDay = false;
        events.push(event);
        console.log(events);
        document.body.removeChild(inputDiv);
        $('#calendar').fullCalendar('addEventSource',events); 
     
        
        
         
        dueinp.value = "";
        startdateinp.value = "";
        startimeinp.value = "";
        enddateinp.value = "";
        endtimeinp.value = "";
       
        }
	});


