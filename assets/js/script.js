// Display Current date at top of page ✅ 
// Display timeblocks for business hours ✅ 
// Display save buttons next to each timeblock ✅ 

// Colors indicate whether block of time is current, in the past, or in the future ✅

// Timeblocks have text area where user can input schedule details ✅

// When save buttons are clicked, schedule details are saved to localStorage ✅

// When user refreshes page, the text in the text areas is still displayed ✅


// Declare variables
var today = $("#currentDay");
var schedule = $(".container");
var timeBlock = $(".time-block");
var hour = $(".hour");
var scheduleText = $("textarea");
var saveButtons = $(".saveBtn");
// console.log(saveButtons);

// Display current day at top of page
today.text("Current Workday: " + moment().format("dddd, MMMM Do YYYY"));

// Function to pull from localStorage to display current schedule at reload of page
function displaySaved() {
    for (var i = 8; i <= 17; i++){
        var savedSchedule = JSON.parse(localStorage.getItem(i));
        // console.log(savedSchedule);

        scheduleText.eq(i-8).text(savedSchedule);
    }
};
// Call Function to display previous schedule
displaySaved();

// Event Listener to save schedule data in localStorage
saveButtons.on("click", saveData);
function saveData(event) {
    var hourKey = event.target.parentNode.children[1].name;
    // console.log(hourKey);
    var userInput = event.target.parentNode.children[1].value;
    localStorage.setItem(hourKey, JSON.stringify(userInput));
};

// Function to keep inputted data on screen when user refreshes page
scheduleText.each (function () {
    var scheduleTextHour = parseInt($(this).attr("name"));
    // console.log(scheduleTextHour);
    var currentHour = moment().hour();
    // console.log(currentHour);

    if (scheduleTextHour === currentHour) {
        $(this).siblings().addClass("present");
        $(this).addClass("present");
    } else if (scheduleTextHour < currentHour) {
        $(this).siblings().addClass("past");
        $(this).addClass("past");
    } else {
        $(this).siblings().addClass("future");
        $(this).addClass("future");
    };

});