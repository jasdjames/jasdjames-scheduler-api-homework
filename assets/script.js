var DateTime = luxon.DateTime;
const currentTime = DateTime.local();
console.log(currentTime);


var save = $(".btn-outline-secondary").addClass("saveBtn");
var rowS = $(".input-group-prepend").addClass("row");
var hourS = $(".input-group-text").addClass("hour time-block");
var innerText = $("textarea.form-control").addClass("hour");

