//Show current time with moment.js
let currentTime = ''
setInterval(function() {
    currentTime = moment().format('MMMM Do YYYY, hh:mm:ss a')
    $('#currentDay').html(currentTime)
}, 1000)



//This is the time-block setting
// 9AM
let event9AM = document.getElementById("event9AM")

$("#btn9AM").click(function () {
    localStorage.setItem("enent9AM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event9AM.value = localStorage.getItem("enent9AM")
})

//10AM
let event10AM = document.getElementById("event10AM")

$("#btn10AM").click(function () {
    localStorage.setItem("enent10AM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event10AM.value = localStorage.getItem("enent10AM")
})

//11AM
let event11AM = document.getElementById("event11AM")

$("#btn11AM").click(function () {
    localStorage.setItem("enent11AM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event11AM.value = localStorage.getItem("enent11AM")
})

//12PM
let event12PM = document.getElementById("event12PM")

$("#btn12PM").click(function () {
    localStorage.setItem("enent12PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event12PM.value = localStorage.getItem("enent12PM")
})

//1PM
let event1PM = document.getElementById("event1PM")

$("#btn1PM").click(function () {
    localStorage.setItem("enent1PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event1PM.value = localStorage.getItem("enent1PM")
})

//2PM
let event2PM = document.getElementById("event2PM")

$("#btn2PM").click(function () {
    localStorage.setItem("enent2PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event2PM.value = localStorage.getItem("enent2PM")
})

//3PM
let event3PM = document.getElementById("event3PM")

$("#btn3PM").click(function () {
    localStorage.setItem("enent3PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event3PM.value = localStorage.getItem("enent3PM")
})

//4PM
let event4PM = document.getElementById("event4PM")

$("#btn4PM").click(function () {
    localStorage.setItem("enent4PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event4PM.value = localStorage.getItem("enent4PM")
})

//5PM
let event5PM = document.getElementById("event5PM")

$("#btn5PM").click(function () {
    localStorage.setItem("enent5PM", $(this).siblings("input").val())
    $(".description").css("visibility", "visible")
})

document.addEventListener('DOMContentLoaded', function () {
    event5PM.value = localStorage.getItem("enent5PM")
})


// Set color
// 9AM
let timeNumber = parseInt(moment().format('HH:mm:ss'))

if (timeNumber > 9) {
    $("#event9AM").addClass('past')    
} else if (timeNumber < 9) {
    $("#event9AM").addClass('future')    
} else { 
    $("#event9AM").addClass('present')    
}

//10AM
if (timeNumber > 10) {
    $("#event10AM").addClass('past')    
} else if (timeNumber < 10) {
    $("#event10AM").addClass('future')    
} else { 
    $("#event10AM").addClass('present')    
}

//11AM
if (timeNumber > 11) {
    $("#event11AM").addClass('past')    
} else if (timeNumber < 11) {
    $("#event11AM").addClass('future')    
} else { 
    $("#event11AM").addClass('present')    
}

//12PM
if (timeNumber > 12) {
    $("#event12PM").addClass('past')    
} else if (timeNumber < 12) {
    $("#event12PM").addClass('future')    
} else { 
    $("#event12PM").addClass('present')    
}

//1PM
if (timeNumber > 13) {
    $("#event1PM").addClass('past')    
} else if (timeNumber < 13) {
    $("#event1PM").addClass('future')    
} else { 
    $("#event1PM").addClass('present')    
}

//2PM
if (timeNumber > 14) {
    $("#event2PM").addClass('past')    
} else if (timeNumber < 14) {
    $("#event2PM").addClass('future')    
} else { 
    $("#event2PM").addClass('present')    
}

//3PM
if (timeNumber > 15) {
    $("#event3PM").addClass('past')    
} else if (timeNumber < 15) {
    $("#event3PM").addClass('future')    
} else { 
    $("#event3PM").addClass('present')    
}

//4PM
if (timeNumber > 16) {
    $("#event4PM").addClass('past')    
} else if (timeNumber < 16) {
    $("#event4PM").addClass('future')    
} else { 
    $("#event4PM").addClass('present')    
}

//5PM
if (timeNumber > 17) {
    $("#event5PM").addClass('past')    
} else if (timeNumber < 17) {
    $("#event5PM").addClass('future')    
} else { 
    $("#event5PM").addClass('present')    
}