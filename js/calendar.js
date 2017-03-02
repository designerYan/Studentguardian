$(document).ready(function() {
    
   var $calendar = $('#calendar');
   var id = 10;

   $calendar.weekCalendar({
      timeslotsPerHour : 4,
      allowCalEventOverlap : true,
      overlapEventsSeparate: true,
      firstDayOfWeek : 1,
      businessHours :{start: 8, end: 24, limitDisplay: true },
      daysToShow : 5,
      height : function($calendar) {
         return $(window).height() - $("h1").outerHeight() - 1;
      },
      eventRender : function(calEvent, $event) {
         if (calEvent.end.getTime() < new Date().getTime()) {
            $event.css("backgroundColor", "#aaa");
            $event.find(".wc-time").css({
               "backgroundColor" : "#999",
               "border" : "1px solid #888"
            });
         }
      },
      draggable : function(calEvent, $event) {
         return calEvent.readOnly != true;
      },
      resizable : function(calEvent, $event) {
         return calEvent.readOnly != true;
      },
      eventNew : function(calEvent, $event) {
         var $dialogContent = $("#event_edit_container");
         resetForm($dialogContent);
         var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
         var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
         var titleField = $dialogContent.find("input[name='title']");
         var instructorField = $dialogContent.find("input[name='instructor']");
         var locationField = $dialogContent.find("input[name='location']");
         var typeField = $dialogContent.find("input[name='type']"); 
          

         $dialogContent.dialog({
            modal: true,
            title: "New Calendar Event",
            close: function() {
               $dialogContent.dialog("destroy");
               $dialogContent.hide();
               $('#calendar').weekCalendar("removeUnsavedEvents");
            },
            buttons: {
               save : function() {
                  calEvent.id = id;
                  id++;
                  calEvent.start = new Date(startField.val());
                  calEvent.end = new Date(endField.val());
                  calEvent.title = titleField.val();
                  calEvent.instructor = instructorField.val();
                  calEvent.location = locationField.val();
                  calEvent.type = typeField.val();
                  
                  localStorage.setItem("end", locationField.val());   
                   
                  console.log(new Date(startField.val()));
                  console.log(new Date(endField.val()));
                  console.log(titleField.val());
                  console.log(instructorField.val());
                  console.log(locationField.val());
                  console.log(typeField.val()); 

                  $calendar.weekCalendar("removeUnsavedEvents");
                  $calendar.weekCalendar("updateEvent", calEvent);
                  $calendar.weekCalendar({
                      data:function(start, end, callback){
                          window.myevents.push(calEvent);
                          callback(window.myevents);
                      }
                  })
                 
                    $.ajax(
                        {
                            url:"test.php",
                            type:"post",
                            dataType:"json",
                            data:{
                                    start:new Date(startField.val()),
                                    end:new Date(endField.val()),
                                    title:titleField.val(),
                                    instructor:instructorField.val(),
                                    location:locationField.val(),
                                    classtype:typeField.val(),
                                    type:"schedule"
                          },
                            success:function(resp){
                                    console.log(resp);
                          }
                    }
                );
                   
                   
                  $dialogContent.dialog("close");
               },
               cancel : function() {
                  $dialogContent.dialog("close");
               }
            }
         }).show();
         
         $dialogContent.find(".date_holder").text($calendar.weekCalendar("formatDate", calEvent.start));
         setupStartAndEndTimeFields(startField, endField, calEvent, $calendar.weekCalendar("getTimeslotTimes", calEvent.start));

      },
      eventDrop : function(calEvent, $event) {
      },
      eventResize : function(calEvent, $event) {
      },
      eventClick : function(calEvent, $event) {

         if (calEvent.readOnly) {
            return;
         }

         var $dialogContent = $("#event_edit_container");
         resetForm($dialogContent);
         var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
         var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
         var titleField = $dialogContent.find("input[name='title']").val(calEvent.title);
         var instructorField = $dialogContent.find("input[name='instructor']").val(calEvent.instructor);
         var locationField = $dialogContent.find("input[name='location']").val(calEvent.location); 
         var typeField = $dialogContent.find("input[name='type']").val(calEvent.type);
         instructorField.val(calEvent.instructor);

         $dialogContent.dialog({
            modal: true,
            title: "Edit - " + calEvent.title,
            close: function() {
               $dialogContent.dialog("destroy");
               $dialogContent.hide();
               $('#calendar').weekCalendar("removeUnsavedEvents");
               $calendar.weekCalendar({
                      data:function(start, end, callback){
                          window.myevents.splice(calEvent);
                          callback(window.myevents);
                      }
                  })
            },
            buttons: {
               save : function() {

                  calEvent.start = new Date(startField.val());
                  calEvent.end = new Date(endField.val());
                  calEvent.title = titleField.val();
                  calEvent.instructor = instructorField.val();
                  calEvent.location = locationField.val();
                  calEvent.type = typeField.val();
                  $calendar.weekCalendar({
                      data:function(start, end, callback){
                          window.myevents.push(calEvent);
                          callback(window.myevents);
                      }
                  })
                   
                  $calendar.weekCalendar("updateEvent", calEvent);
                   
                  $dialogContent.dialog("close");
               },
               "delete" : function() {
                  
                  $.ajax({
                        url:"deleteschedule.php",
                        type:"post",
                        data:{
                            type:"delete"
                        },
                        success:function(resp){
                            for(var a=0; a<resp.length; a++){
                                id:a
                            }
                            scheduleID = id;
                            console.log(scheduleID);
                             console.log(resp);
                            alert("Your class schedule will be removed from calendar.");
                            $calendar.weekCalendar("removeEvent", calEvent.id);
                        }
                  });
                   
                  $dialogContent.dialog("close");
               },
               cancel : function() {
                  $dialogContent.dialog("close");
               }
            }
         }).show();

         var startField = $dialogContent.find("select[name='start']").val(calEvent.start);
         var endField = $dialogContent.find("select[name='end']").val(calEvent.end);
         $dialogContent.find(".date_holder").text($calendar.weekCalendar("formatDate", calEvent.start));
         setupStartAndEndTimeFields(startField, endField, calEvent, $calendar.weekCalendar("getTimeslotTimes", calEvent.start));
         $(window).resize().resize(); //fixes a bug in modal overlay size ??

      },
      eventMouseover : function(calEvent, $event) {
      },
      eventMouseout : function(calEvent, $event) {
      },
      noEvents : function() {

      },
      data : function(start, end, callback) {
         //callback(getEventData());
          $.ajax({
             url:"grabscheduleinfo.php",
             type:"get",
             dataType:"json",
             success:function(resp){
                   /* function getEventData() {
                    var year = new Date().getFullYear();
                    var month = new Date().getMonth();
                    var day = new Date().getDate();*/
                 //console.log(resp);  
                 window.myevents = [];
                 for(var i=0; i<resp.length; i++){
                    var obj = {  
                        "id":i+1,
                        "start":new Date(resp[i].start),
                        "end":new Date(resp[i].end),
                        "title":resp[i].title,
                        "instructor":resp[i].instructor,
                        "location":resp[i].location,
                        "type":resp[i].type,
                        }; 
                    //console.log(obj.id);
                    window.myevents.push(obj);
                    console.log(window.myevents[i].id);
                    console.log(window.myevents);
                        //$calendar.weekCalendar("updateEvent", obj); 
                 }
                 //$calendar.weekCalendar("removeUnsavedEvents");
                 //console.log($calendar)
                 callback(getEventData(window.myevents));
                     //return {events : []};
                }           
            }
         );
      }
   });

   function resetForm($dialogContent) {
      $dialogContent.find("input").val("");
      $dialogContent.find("textarea").val("");
   }

  function getEventData(results) {
        return {
            events: results
        }
  }
         
        

   /*
    * Sets up the start and end time fields in the calendar event
    * form for editing based on the calendar event being edited
    */
   function setupStartAndEndTimeFields($startTimeField, $endTimeField, calEvent, timeslotTimes) {

      for (var i = 0; i < timeslotTimes.length; i++) {
         var startTime = timeslotTimes[i].start;
         var endTime = timeslotTimes[i].end;
         var startSelected = "";
         if (startTime.getTime() === calEvent.start.getTime()) {
            startSelected = "selected=\"selected\"";
         }
         var endSelected = "";
         if (endTime.getTime() === calEvent.end.getTime()) {
            endSelected = "selected=\"selected\"";
         }
         $startTimeField.append("<option value=\"" + startTime + "\" " + startSelected + ">" + timeslotTimes[i].startFormatted + "</option>");
         $endTimeField.append("<option value=\"" + endTime + "\" " + endSelected + ">" + timeslotTimes[i].endFormatted + "</option>");

      }
      $endTimeOptions = $endTimeField.find("option");
      $startTimeField.trigger("change");
   }

   var $endTimeField = $("select[name='end']");
   var $endTimeOptions = $endTimeField.find("option");

   //reduces the end time options to be only after the start time options.
   $("select[name='start']").change(function() {
      var startTime = $(this).find(":selected").val();
      var currentEndTime = $endTimeField.find("option:selected").val();
      $endTimeField.html(
            $endTimeOptions.filter(function() {
               return startTime < $(this).val();
            })
            );

      var endTimeSelected = false;
      $endTimeField.find("option").each(function() {
         if ($(this).val() === currentEndTime) {
            $(this).attr("selected", "selected");
            endTimeSelected = true;
            return false;
         }
      });

      if (!endTimeSelected) {
         //automatically select an end date 2 slots away.
         $endTimeField.find("option:eq(1)").attr("selected", "selected");
      }

   });


   var $about = $("#about");

   $("#about_button").click(function() {
      $about.dialog({
         title: "About this calendar demo",
         width: 600,
         close: function() {
            $about.dialog("destroy");
            $about.hide();
         },
         buttons: {
            close : function() {
               $about.dialog("close");
            }
         }
      }).show();
   });


});