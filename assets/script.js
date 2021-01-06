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
var textBox = $("textarea.form-control").addClass("hour");
var userText = ($('textarea.form-control').val());
var textArr = [$("#text9"), $("text10"), $("text11"), $("text12"), $("text13"), $("text14"), $("text15"), $("text16"), $("text17") ]


// I was helped by my instructor with this block and how to make it  work correctly during  office hours

$('textarea.form-control').each(function (el) {
    // console.log($(this).attr('data-hr'));
    // console.log(parseInt($(this).attr('data-hr')));
    if (dt.hour === parseInt($(this).attr('data-hr'))) {
        $(this).addClass("present");
    } else if (dt.hour > $(this).attr('data-hr')) {
        $(this).addClass("past")
    } else {
        $(this).addClass("future");
    }


  
}) 
    
    
$(".saveBtn").on("click", function (event) {
        console.log($(this));

 if($(this)) {  
    
    
   
   textArr.forEach(function (element) {
localStorage.setItem($(this).attr("data-hr"), $("textarea.form-control").val())  
 event.preventDefault()
     }) 
    
    
    // ("text", $("#text9").val());

    // localStorage.setItem("text", $("#text10").val());
    // localStorage.setItem("text", $("#text11").val());
    // localStorage.setItem("text", $("#text12").val());
    // localStorage.setItem("text", $("#text13").val());
    // localStorage.setItem("text", $("#text13").val());
    // localStorage.setItem("text", $("#text14").val());
    // localStorage.setItem("text", $("#text15").val());
    // localStorage.setItem("text", $("#text16").val());
    // localStorage.setItem("text", $("#text17").val());
    console.log($("#text9").val())
    console.log($("#text10").val())

// textArr.push($("textarea.form-control").val());
// textArr.forEach(function (textArr) {

// console.log($("textarea.form-control").val());
// console.log(textArr);
            // localStorage.setItem("text", ($('textarea.form-control'.val()))).foreach(function (el) {
            //     alert('This is a test')
            // })
         
};     
})   
// })




















    //    var typedText = $.makeArray( $('textarea.form-control').val());   
    //     console.log(typedText);
    //      typedText.push ($(this)).
    //      typedText.forEach("click", function (event){
    //          console.log($(this));
    //      })

    //      };
    //     // typedText.forEach(function (el) {

    //      console.log ($(this)) 

