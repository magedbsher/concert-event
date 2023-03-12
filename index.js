/use strict/;

let eventDay = document.querySelector("#daysCounter");
let eventHour = document.querySelector("#hoursCounter");
let eventMins = document.querySelector("#minutesCounter");
let eventSeconds = document.querySelector("#secondsCounter");
let deadLine, Rightnow, countingDate;

//eveny date 

 deadLine = new Date("12 april,2025,15:00:00").getTime();
//console.log(deadLine);
// updates 


setInterval(function(){

//present date

RightNow = new Date().getTime();
//console.log(RightNow);

//displaying date

 countingDate = deadLine - RightNow ;
//console.log(countingDate);

// calculations of each number 

let days = Math.floor(countingDate / (1000 * 60 * 60 * 24));
let hours = Math.floor((countingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((countingDate % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((countingDate % (1000 * 60)) / 1000);

eventDay.innerHTML = `${days}D`;
eventHour.innerHTML = `${hours}H`;
eventMins.innerHTML = `${minutes}M`;
eventSeconds.innerHTML = `${seconds}S`;


},1000);





$(".slider p").slideUp()

$(".singer1 h4").click(function(){
   // console.log("hey");
    $(".singer1 p").slideToggle(500)
})

$(".singer2 h4").click(function(){
    $(" .singer2 p").slideToggle(500)
})


$(".singer3 h4").click(function(){
    $(" .singer3 p").slideToggle(500)
})


$(".singer4 h4").click(function(){
    $(" .singer4 p").slideToggle(500)
})



$("#barBox i").click(function(){
if($("#barBox").css("left")== "0px" ){    $("#barBox").animate({left:-$(".switch").innerWidth()},1000)
}else{
    $("#barBox").animate({left:"0px"},1000)

}

})

$("DETAILS").click(function(){
console.log("hey");
document.getElementById('#DETAILS').scrollIntoView();})


// document.getElementById("#HEADER").scrollIntoView({behavior: 'smooth'});

