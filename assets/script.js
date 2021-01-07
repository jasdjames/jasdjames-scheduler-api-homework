// $(document).ready(function () {

var DateTime = luxon.DateTime;
var dt = DateTime.local();
var Day = $("#currentDay")
var newFormat = Day.text(dt.toLocaleString(DateTime.DATE_HUGE));
console.log(dt.hour);
console.log($("textarea.form-control").attr("data-hr"))
$(".btn-outline-secondary").addClass("saveBtn");
$(".input-group-prepend").addClass("row");
$(".input-group-text").addClass("hour time-block");
// var textBox = $("textarea.form-control").addClass("hour");
var userText = ($('textarea.form-control').val());
var textArr = [$("#text9"), $("#text10"), $("#text11"), $("#text12"), $("#text13"), $("#text14"), $("#text15"), $("#text16"), $("#text17")]


// I was helped by my instructor with this block and how to make it  work correctly during  office hours

$('textarea.form-control').each(function (el) {
    var words = $(this).attr('data-hr')
    var storage = localStorage.getItem(words)

    console.log(storage);

    console.log($(this))

    if (dt.hour === parseInt($(this).attr('data-hr'))) {
        $(this).addClass("present").text(storage)
    } else if (dt.hour > $(this).attr('data-hr')) {
        $(this).addClass("past").text(storage)
    } else {
        $(this).addClass("future").text(storage);
    }



})

// Will Utterback explained how to navigate dom using Jquery  methods. It was extremely helpful  

$(".saveBtn").on("click", function () {

    var text = $(this).parent().siblings(".form-control").val();
    var id = $(this).parent().siblings(".form-control").attr('data-hr');

    localStorage.setItem(id, text)


})









console.log($("#text9").val())
console.log($("#text10").val())





















    //    var typedText = $.makeArray( $('textarea.form-control').val());   
    //     console.log(typedText);
    //      typedText.push ($(this)).
    //      typedText.forEach("click", function (event){
    //          console.log($(this));
    //      })

    //      };
    //     // typedText.forEach(function (el) {

    //      console.log ($(this)) 

