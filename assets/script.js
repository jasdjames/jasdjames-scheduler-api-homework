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
var textArr = [$("#text9"), $("#text10"), $("#text11"), $("#text12"), $("#text13"), $("#text14"), $("#text15"), $("#text16"), $("#text17") ]


// I was helped by my instructor with this block and how to make it  work correctly during  office hours

$('textarea.form-control').each(function (el) {
   var storage = localStorage.getItem(words)
   var words = $(this).attr('data-hr')
   console.log(storage);
   console.log(words)
   console.log($(this))   
   
    if (dt.hour === parseInt($(this).attr('data-hr'))) {
        $(this).addClass("present");
    } else if (dt.hour > $(this).attr('data-hr')) {
        $(this).addClass("past")
    } else {
        $(this).addClass("future");
    }


  
}) 
   
// Will Utterback explained how to navigate dom using Jquery  methods 

$(".saveBtn").on("click", function () {

var text =$(this).parent().siblings(".form-control").val();
var id = $(this).parent().siblings(".form-control").attr('data-hr');

localStorage.setItem(id, text)




// textArr.forEach(function(e) {     
//  localStorage.setItem(e.attr("id"),
// console.log(userText);
//  console.log(e.value);
 
 
// if ($("textarea.text-control").val()=== !null){
//     console.log(($("textarea.text-control").val()));
//     console.log($(this));
//     localStorage.getItem("Hour 9", $("#text9").val()).appendTo($("#text9"))
//     localStorage.getItem("Hour 10", $("#text10").val());
//     localStorage.getItem("Hour 11", $("#text11").val());
//     localStorage.getItem("Hour 12", $("#text12").val());
//     localStorage.getItem("Hour 13", $("#text13").val());
//     localStorage.getItem("Hour 14", $("#text14").val());
//     localStorage.getItem("Hour 15", $("#text15").val());
//     localStorage.getItem("Hour 15", $("#text16").val());
//     localStorage.getItem("Hour 17", $("#text17").val());   
// if ($("textarea.text-control").val()=== !"")   {
    // localStorage.setItem("Hour 9", $("#text9").val());
    // localStorage.setItem("Hour 10", $("#text10").val());
    // localStorage.setItem("Hour 11", $("#text11").val());
    // localStorage.setItem("Hour 12", $("#text12").val());
    // localStorage.setItem("Hour 13", $("#text13").val());
    // localStorage.setItem("Hour 14", $("#text14").val());
    // localStorage.setItem("Hour 15", $("#text15").val());
    // localStorage.setItem("Hour 15", $("#text16").val());
    // localStorage.setItem("Hour 17", $("#text17").val());   
   
//    textArr.forEach(function (element) {
// localStorage.setItem($(this).attr("data-hr"), $("textarea.form-control").val())  
// this needs a loop for sure but something else too

})
   
    


    
    
    // ("text", $("#text9").val());

  
    console.log($("#text9").val())
    console.log($("#text10").val())

// textArr.push($("textarea.form-control").val());
// textArr.forEach(function (textArr) {

// console.log($("textarea.form-control").val());
// console.log(textArr);
            // localStorage.setItem("text", ($('textarea.form-control'.val()))).foreach(function (el) {
            //     alert('This is a test')
            // })
         
// };     
  
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

