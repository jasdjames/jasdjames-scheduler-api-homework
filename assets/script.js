var DateTime = luxon.DateTime;
var dt = DateTime.local();
var Day = $("#currentDay")
var newFormat = Day.text(dt.toLocaleString(DateTime.DATE_HUGE));


    

console.log(dt.hour);
console.log($("textarea.form-control").attr("data-hr"))

$(".btn-outline-secondary").addClass("saveBtn");
$(".input-group-prepend").addClass("row");
$(".input-group-text").addClass("hour time-block");
var textBox = $("textarea.form-control").addClass("hour");



// I was helped by my instructor with this block and how to make it  work correctly during  office hours

$('textarea.form-control').each(function(el){
    console.log($(this).attr('data-hr'));
    console.log (parseInt($(this).attr('data-hr')));
        if (dt.hour === parseInt($(this).attr('data-hr'))) {
            $(this).addClass("present");
        } else if (dt.hour > $(this).attr('data-hr')) {
            $(this).addClass("past")
        } else {
            $(this).addClass("future");
        }
        })  
    




$(".saveBtn").click(function saveRow(event) {

    localStorage.setItem("text".textBox.innerText);


})




