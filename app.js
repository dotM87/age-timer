// Create a date picker element
const datePicker = document.createElement("input");
datePicker.type = "date";
// Save the selected date
const selectedDate = datePicker.value;

document.getElementById("age-timer").innerHTML = datePicker;