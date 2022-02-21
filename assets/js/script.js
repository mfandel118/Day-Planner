// Display Current date at top of page ✅ 
// Display timeblocks for business hours ✅ 
// Display save buttons next to each timeblock ✅ 

// Colors indicate whether block of time is current, in the past, or in the future

// Timeblocks have text area where user can input schedule details ✅

// When save buttons are clicked, schedule details are saved to localStorage

// When user refreshes page, the text in the text areas is still displayed


// Declare variables
var today = $("#currentDay");
var schedule = $(".container");
var timeBLock = $(".time-block");
var hour = $(".hour");
var scheduleText = $("textarea");
var saveButtons = $(".saveBtn");

// Display current day at top of page
today.text("Current Workday: " + moment().format("dddd, MMMM Do YYYY"));

function timeBlockColors () {
    var currentHour = moment().hour();
    // console.log(currentHour);
    var scheduleTextHour = scheduleText.attr("name");
    // console.log(scheduleTextHour);
    var hoursIndex = []; // HOW DO I PLACE EACH TEXTAREA NAME INTO ARRAY? OR DO I EVEN NEED TO?
    
    for (var i=0; i<=10; i++) {
        // var scheduleTextHour = scheduleText.attr("name");
        
        if (scheduleTextHour == currentHour) {
            hour.addClass("present");
            scheduleText.addClass("present");
        } else if (scheduleTextHour < currentHour) {
            hour.addClass("past");
            scheduleText.addClass("past");
        } else {
            hour.addClass("future");
            scheduleText.addClass("future");
        };
    };
    
    
};
// Call function to set schedule hour colors
timeBlockColors();

// Add event listener to save user inputted data to localStorage
saveButtons.on("click",saveData);
function saveData() {
    var userInput = scheduleText.val();
    var hourKey = hour.val();  // WHY DOES HOUR NOT SHOW UP FOR KEY IN LOCALSTORAGE?

    localStorage.setItem(hourKey, JSON.stringify(userInput));
};

// Function to keep inputted data on screen when user refreshes page
function displayUserInput() {
    // Pull data from localStorage and display on page
    var savedUserInput = [
        localStorage.getItem(JSON.parse("8AM")),
        localStorage.getItem(JSON.parse("8AM")),
        localStorage.getItem(JSON.parse("9AM")),
        localStorage.getItem(JSON.parse("10AM")),
        localStorage.getItem(JSON.parse("11AM")),
        localStorage.getItem(JSON.parse("12PM")),
        localStorage.getItem(JSON.parse("1PM")),
        localStorage.getItem(JSON.parse("2PM")),
        localStorage.getItem(JSON.parse("3PM")),
        localStorage.getItem(JSON.parse("4PM")),
        localStorage.getItem(JSON.parse("5PM")),
    ];

    for (var i=0; i<savedUserInput.length; i++) {
       scheduleText.text(savedUserInput[i])
    };
};
// Call function to keep user inputted data on screen
displayUserInput();