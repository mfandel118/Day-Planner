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
// console.log(saveButtons);

// Display current day at top of page
today.text("Current Workday: " + moment().format("dddd, MMMM Do YYYY"));

function timeBlockColors () {
    var currentHour = moment().hour();
    console.log(currentHour);
    // console.log(typeof(currentHour));

    for (var i=0; i<scheduleText.length; i++) {
        var scheduleTextHour = parseInt(scheduleText[i].name)
        console.log(scheduleTextHour);
        // console.log(typeof(scheduleTextHour));

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

saveButtons.on("click", saveData);

function saveData(event) {
    var hourKey = event.target.parentNode.children[0].textContent;
    console.log(hourKey);
    var userInput = event.target.parentNode.children[1].value;
    localStorage.setItem(hourKey, JSON.stringify(userInput));
};



// Add event listener to save user inputted data to localStorage
// saveButtons.on("click",saveData);  // WHY DOES ONLY FIRST SAVE BUTTON WORK?
// function saveData() {
//     
//     var hourKey = hour.text();  // WHY DOES HOUR NOT SHOW UP FOR KEY IN LOCALSTORAGE?

//     
// };


// Function to keep inputted data on screen when user refreshes page
function displayUserInput() {
    // Pull data from localStorage and display on page
    var savedUserInput = [
        localStorage.getItem("8AM"),
        localStorage.getItem("9AM"),
        localStorage.getItem("10AM"),
        localStorage.getItem("11AM"),
        localStorage.getItem("12PM"),
        localStorage.getItem("1PM"),
        localStorage.getItem("2PM"),
        localStorage.getItem("3PM"),
        localStorage.getItem("4PM"),
        localStorage.getItem("5PM"),
    ];
    console.log(savedUserInput);

    for (var i=0; i<savedUserInput.length; i++) {
       scheduleText.text(savedUserInput[i])
    };
};
// Call function to keep user inputted data on screen
displayUserInput();