var divContainer = $(".container");
var saveBtn = document.querySelectorAll("button");
var hourList = ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm','5pm',];
var timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//id current time
var currentDay = $("#currentDay");

//luxon time libary
const DateTime = luxon.DateTime;
//luxon var's
var now  = DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'



//display current time
function showCurrentTime(){
    currentDay.append(now);
};



//for loop for hourlist
for (var i =0; i<hourList.length; i++){
    //creates row by cre
    var createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
   
 divContainer.append(createRow);

    var createTime = $("<div class='hour col-1'>");

    createTime.text(hourList[i]);

    createRow.append(createTime);

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
