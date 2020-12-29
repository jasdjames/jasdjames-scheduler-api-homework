var DateTime = luxon.DateTime;
var dt = DateTime.local();
var Day = $("#currentDay")
var newFormat = Day.text(dt.toLocaleString(DateTime.DATE_HUGE)); 

console.log(dt);
$(".btn-outline-secondary").addClass("saveBtn");
$(".input-group-prepend").addClass("row");
$(".input-group-text").addClass("hour time-block");
$("textarea.form-control").addClass("hour");

// If the hours equals now = give x class 
   //   heres where I was working -----> if $(dt.startOf('hour')) - 

// if the hour is past give y class 

// if this hour is the future give z class --- Check luxon documentation



