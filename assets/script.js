var DateTime = luxon.DateTime;
var dt = DateTime.local();
var Day = $("#currentDay")
var newFormat = Day.text(dt.toLocaleString(DateTime.DATE_HUGE)); 



console.log(dt.hour);

$(".btn-outline-secondary").addClass("saveBtn");
$(".input-group-prepend").addClass("row");
$(".input-group-text").addClass("hour time-block");
$("textarea.form-control").addClass("hour");

function currentTime (){
    
if (dt.hour ===  $("textarea").value){

$("textarea.form-control.hour").addClass("present");
}if(dt.hour < $("textarea").value ) {
    
$("textarea.form-control.hour").addClass("past")
}else{
    $("textarea.form-control.hour").addClass("future");
}
};

currentTime ();







