var divContainer = $(".container");
var saveBtn = document.querySelectorAll("button");
var hourList = [
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];
var timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//id current time
var currentDay = $("#currentDay");

//luxon time libary
const DateTime = luxon.DateTime;
//luxon var's
var now = DateTime.now().toLocaleString({
  weekday: "short",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
}); //=> 'Thu, Apr 20, 11:27 AM'

//display current time
function showCurrentTime() {
  currentDay.append(now);
}

//for loop for hourlist
for (var i = 0; i < hourList.length; i++) {

  //creates row var //by calling for a DOM eleemnt with $jquery, added class=row , timeblock.  creating the attribute of a id, assigning var timeId to the id, then looping thru var timeID with var I (loop.length)
  var divRowTimeBlock  = $("<div class='row time-block'>").attr("id", timeId[i]);
  //calling .container appending createRowtimeblock .
  divContainer.append(divRowTimeBlock);


  //time col  // DOM with jquery creating class=hour col-l
  var divHourCol = $("<div class='hour col-1'>");
  //display text from hour list in a loop= hourlist in var createTime
  divHourCol.text(hourList[i]);
  //append divhourcol1
  divRowTimeBlock.append(divHourCol);


  //User text col
  var userText =$("<textarea class='col-10'>");
  userText.attr("id", hourList[i]);
  userText.text();
  divRowTimeBlock.append(userText);

  //save button
 var buttonCol =$("<button type='button' class='saveBtn col-1'>");


  divRowTimeBlock.append(buttonCol);
}

// Append the columns to the parent row

//run current time function
showCurrentTime();

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// ---------THEN the current day is displayed at the top of the calendar-----------------
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
